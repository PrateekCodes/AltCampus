var http = require("http");
var fs = require("fs");
var server = http.createServer(onRequest);
function onRequest(req, res) {
  var store = "";
  console.log(req.method);
  req.on("data", chunk => {
    store += chunk;
    console.log(store);
  });
  req.on("end", () => {
    res.end(store);
  });
}
server.listen(6001);
// var url = require("url");
// var myUrl = "http://localhost:4000/users?username=px";
// var parseUrl = url.parse(myUrl);
// console.log(parseUrl);
// var fs = requir    var fs = require("fs");e("fs");
// var sync = fs.readFileSync("abc.txt");
// console.log(sync.toString());
// console.log("me first");
// var http = require("http");
// var server = http.createServer(onRequest);
// var fs = require("fs");
// function onRequest(req, res) {
//   console.log(req);
//   res.writeHead(201, { "content-type": "text/html" });
//   if (req.url == "/") {
//     fs.readFile("index.html", (err, content) => {
//       if (err) res.end(err);
//       res.end(content);
//     });
//   } else if (req.url == "/about") {
//     res.end("about page");
//   } else res.end("page not found");
// }
// server.listen(3003);
