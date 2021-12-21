const http = require("http");
const { request, response } = require("http");
const server = http
  .createServer((request, response) => {
    if (request.url === "/status" && request.method === "GET") {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(JSON.stringify({ message: "Taylor hunter" }));
      response.end();
    }
  })
  .listen(4040);

console.log("Listening on port 4040");
