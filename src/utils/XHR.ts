import {PlainObject, queryString} from "./queryString";

enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE"
}

type XHRHeader = Record<string, string>

interface XHROptions {
  data?: object,
  form?: FormData,
  credentials?: string,
  mode?: string,
  headers?:  XHRHeader,
  timeout?: number,
  method?: METHODS | string
}

interface FetchOptions extends XHROptions {
  retries: number
}

export class HTTPTransport {
  
  baseUrl: string;
  
  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || "";
  }
  
  get = (url: string, options: XHROptions = {}) => {
    if (options.data && Object.keys(options.data).length) {
      url += queryString(options.data as PlainObject);
      delete options.data;
    }
    return this.request(url, {...options, method: METHODS.GET}, options.timeout);
  };
  
  put = (url: string, options: XHROptions = {}) => {
    return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
  };
  
  post = (url: string, options: XHROptions = {}) => {
    return this.request(url, {...options, method: METHODS.POST}, options.timeout);
  };
  
  delete = (url: string, options: XHROptions = {}) => {
    return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
  };
  
  request = (url: string, options: XHROptions, timeout:number = 5000) => {
    return new Promise((resolve, reject) => {
      const {method, data, headers, form} = options;
      const xhr = new XMLHttpRequest();
      xhr.open(options.method as string, this.baseUrl + url);
      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });
      }
      if (options.credentials === "include") {
        xhr.withCredentials = true;
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
      if (form) {
        xhr.send(form);
      } else if (method === METHODS.GET || !data ) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
      setTimeout( () => {
        reject(new Error("timeout"));
      }, timeout);
    });
  };
}

// eslint-disable-next-line no-unused-vars
export function fetchWithRetry(url: string, options: FetchOptions): any {
  if (options && options.retries && options.retries > 1) {
    const req = new HTTPTransport();
    return req.get(url, options).then(
      (response) => {
        return response;
      },
      () => {
        options.retries--;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return fetchWithRetry(url, options);
      }
    );
  } else {
    throw new Error("Нет попыток");
  }
}
