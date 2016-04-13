var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer(function (req, res) {

fs.readFile('index2.html', function (err, content) {
if (err) {
res.writeHead(500);
res.end("page not found");
}
else {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end(content, 'utf-8');
}
});


server.listen(80);