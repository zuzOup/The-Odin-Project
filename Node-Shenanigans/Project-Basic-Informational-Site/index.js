const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 8080;

const server = http.createServer((req, res) => {
  let filePath = "";

  // Set the file path based on the URL
  switch (req.url) {
    case "/":
      filePath = "./index.html";
      break;
    case "/about":
      filePath = "./about.html";
      break;
    case "/contact-me":
      filePath = "./contact-me.html";
      break;
    default:
      filePath = "./404.html";
  }

  // Set content type based on file type
  const extname = path.extname(filePath);
  let contentType = "text/html";
  if (extname === ".css") {
    contentType = "text/css";
  } else if (extname === ".js") {
    contentType = "application/javascript";
  }

  // Read the file and send the response
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end("Server Error");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
