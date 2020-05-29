var http = require('http');
var sample = fs.readFileSync('hme1.html','utf8');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);
 app.post('/create-contact',function(req,res){
   return res.redirect('/practice');
 });
