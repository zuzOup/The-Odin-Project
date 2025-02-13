#!/usr/bin/env node

// const axios = require("axios");

// axios
//   .get("https://example.com/todos")
//   .then((res) => {
//     console.log(`statusCode: ${res.status}`);
//     console.log(res);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const https = require("https");

// const options = {
//   hostname: "example.com",
//   port: 443,
//   path: "/todos",
//   method: "GET",
// };

// const req = https.request(options, (res) => {
//   console.log(`statusCode: ${res.statusCode}`);

//   res.on("data", (d) => {
//     process.stdout.write(d);
//   });
// });

// req.on("error", (error) => {
//   console.error(error);
// });

// req.end();
console.log(1);

const http = require("node:http");

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello World!",
    })
  );
});

server.listen(8000);

console.log(2);
