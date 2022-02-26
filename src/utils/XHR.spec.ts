import {HTTPTransport} from "./XHR";
import {assert} from "chai";
import {createServer, Server} from "http";
import {after} from "mocha";

describe("XHR tests", () => {
  
  const PORT = 3000;
  const successText: string = "Success";
  
  let server: Server;
  
  before(() => {
    // eslint-disable-next-line global-require
    require("jsdom-global")("<html><body></body></html>", {
      url: "http://localhost:3000",
    });
  
    server = createServer(( request, response) => {
      response.statusCode = 500;
      response.statusMessage = "";
      if (request.method === "GET") {
        response.statusCode  = 200;
        response.statusMessage = successText;
        setTimeout(() => {
          response.end();
        }, 2000);
        return;
      }
      const method = request.method;
      if (method === "POST" || method === "PUT" || method === "DELETE") {
        response.statusCode  = 200;
        response.statusMessage = successText;
        let data: any = "";
        request.on("data", (chunk: any) => {
          data += chunk;
        });
        request.on("end", () => {
          response.write(data);
          response.end();
        });
        return;
      }
      response.end();
    }).listen(PORT);
    
  });
  
  function getTransport(url?: string) {
    return new HTTPTransport(url);
  }
  
  it("init base URL", () => {
    const baseUrl: string = "test";
    const transport = getTransport(baseUrl);
    assert.equal(transport.baseUrl, baseUrl);
  });
  
  it("should error", async () => {
    const transport = getTransport();
    await transport.get("http://localhost:" + PORT + 1 + "/error",
      {
        headers: {
          "content-type": "application/json",
        }
      })
      .then(() => {
        assert.equal(1, 0);
      }, (error) => {
        assert.instanceOf(error, Error);
      });
  });
  
  
  it("GET", async () => {
    const transport = getTransport();
    await transport.get("http://localhost:" + PORT,
      {
        headers: {
          "content-type": "application/json",
        }
      })
      .then((result: XMLHttpRequest) => {
        assert.equal<string>(result.statusText, successText);
      }, () => {
        assert.equal(1, 0);
      });
  });
  
  it("POST", async () => {
    const transport = getTransport();
    await transport.post("http://localhost:" + PORT,
      {
        headers: {
          "content-type": "application/json",
        },
        data: {successText}
      })
      .then((result: XMLHttpRequest) => {
        assert.equal(result.status, 200);
        assert.equal(result.statusText, successText);
        assert.equal(result.responseText, JSON.stringify({successText}));
      }, () => {
        assert.equal(1, 0);
      });
  });
  
  it("PUT",  async () => {
    const transport = getTransport();
    const result: any = await transport.put("http://localhost:" + PORT,
      {
        headers: {
          "content-type": "application/json",
        },
        data: {successText}
      });
    assert.equal(result.status, 200);
    assert.equal(result.statusText, successText);
    assert.equal(result.responseText, JSON.stringify({successText}));
  });
  
  it("DELETE", async() => {
    const transport = getTransport();
    await transport.delete("http://localhost:" + PORT,
      {
        headers: {
          "content-type": "application/json",
        },
        data: {successText}
      })
      .then((result: XMLHttpRequest) => {
        assert.equal(result.status, 200);
        assert.equal(result.statusText, successText);
        assert.equal(result.responseText, JSON.stringify({successText}));
      }, () => {
        assert.equal(1, 0);
      });
  });
  
  it("GET timeout", async () => {
    const transport = getTransport();
    await transport.get("http://localhost:" + PORT,
      {
        headers: {
          "content-type": "application/json",
        },
        timeout: 0
      })
      .then(() => {
        assert.equal(1, 0);
      }, (error: Error) => {
        assert.equal(error.message, "timeout");
      });
  });
  
  after(() => {
    server.close();
  });
  
});

