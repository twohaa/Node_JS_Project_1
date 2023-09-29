const fs = require("fs");
const http = require("http");
const port = process.env.PORT;
const hostName = "127.0.0.1";

const myserver = http.createServer((req, res) => {
  const handleReadFile = (statusCode, FileLoaction, req, res) => {
    fs.readFile(FileLoaction, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(statusCode, { Content_type: "text/html" });
        res.write(data);
        res.end();
      }
    });
  };

  if (req.url === "/") {
    handleReadFile(200, "./views/index.html", req, res);
  } else if (req.url === "/about") {
    handleReadFile(200, "./views/about.html", req, res);
  } else if (req.url === "/contact") {
    handleReadFile(200, "./views/contact.html", req, res);
  } else {
    handleReadFile(200, "./views/error.html", req, res);
  }
});

myserver.listen(port, hostName, () => {
  console.log(`Server is running at http://${hostName}:${port}`);
});
