/*
var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    path = require('path');
    imageDir = '/img/';

fs.readFile('./index.html', function (err, html) {
    
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
    	
        var pathname = url.parse(request.url).pathname;
        var ext = path.extname(pathname);
        if(ext){
            if(ext === '.css'){
                response.writeHead(200, {'Content-Type': 'text/css'});
            }else if(ext === '.js'){
                response.writeHead(200, {'Content-Type': 'text/javascript'});
            }else if(ext === '.jpg'){
	            response.writeHead(200, {'Content-type': 'image/jpeg'});
            }else if(ext == '.png'){
            	response.writeHead(200, {'Content-type': 'image/png'});
            }
            response.write(fs.readFileSync(__dirname + pathname, 'utf8'));
            console.log(__dirname + pathname);

        }else{
          	response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(html);
        }
        response.end();
    }).listen(8000);
});

console.log('Server running at http://127.0.0.1:8s000/');
*/

var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs")
    port = process.argv[2] || 8888;

http.createServer(function(request, response) {

  var uri = url.parse(request.url).pathname
    , filename = path.join(process.cwd(), uri);
  
  fs.exists(filename, function(exists) {
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      response.end();
      return;
    }

    if (fs.statSync(filename).isDirectory()) filename += '/index.html';

    fs.readFile(filename, "binary", function(err, file) {
      if(err) {        
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        return;
      }

      response.writeHead(200);
      response.write(file, "binary");
      response.end();
    });
  });
}).listen(parseInt(port, 10));

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");