enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE"
}

type XHRHeader = Record<string, string>

interface XHROptions {
  data?: object,
  headers?:  XHRHeader,
  timeout?: number,
  method?: METHODS | string
}

interface FetchOptions extends XHROptions {
  retries: number
}

class HTTPTransport {
  get = (url: string, options: XHROptions = {}) => {
    if (options.data && Object.keys(options.data).length) {
      url += queryStringify(options.data);
      delete options.data;
    }
    return this.request(url, {...options, method: METHODS.GET}, options.timeout);
  };
  
  put = (url: string, options: XHROptions = {}) => {
    return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
  }
  
  post = (url: string, options: XHROptions = {}) => {
    return this.request(url, {...options, method: METHODS.POST}, options.timeout);
  }
  
  delete = (url: string, options: XHROptions = {}) => {
    return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
  }
  
  request = (url: string, options: XHROptions, timeout:number = 5000) => {
    return new Promise((resolve, reject) => {
      const {method, data, headers} = options;
      const xhr = new XMLHttpRequest();
      xhr.open(options.method as string, url);
      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });
      }
      
      xhr.onload = function () {
        resolve(xhr);
      };
      
      const handleError = () => {
        reject(new Error("Ошибка запроса"));
      };
      
      xhr.onabort = handleError;
      xhr.onerror = handleError;
      xhr.ontimeout = handleError;
      
      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
      setTimeout( () => {
        handleError();
      }, timeout);
    });
  }
}

function queryStringify(data: object): string {
  if (!Object.keys(data).length) {
    return "";
  }
  // Можно делать трансформацию GET-параметров в отдельной функции
  return `?` + Object.entries(data).map(([key, value]) => `${key}=${value}`).join("&");
}

function fetchWithRetry(url: string, options: FetchOptions): any {
  if (options && options.retries && options.retries > 1) {
    const req = new HTTPTransport();
    return req.get(url, options).then(
      (response) => {
        return response;
      },
      () => {
        options.retries--;
        return fetchWithRetry(url, options);
      }
    );
  } else {
    throw new Error("Нет попыток");
  }
}
