var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var port = 8080;

const server = http.createServer(function(req, res) {
        req.on('error', function(err){
            console.log(err);   
        })

        if(req.url == '/'){

            let file_path = path.join(__dirname, 'index.html');

            fs.readFile(file_path, function(err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data.toString());
                res.end();
            });
        }
        else if(req.url == '/reg'){

            let file_path = path.join(__dirname, 'registration.html');

            fs.readFile(file_path, function(err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data.toString());
                res.end();
            });
        }
        else if(req.url == '/auth'){

            let file_path = path.join(__dirname, 'authorization.html');

            fs.readFile(file_path, function(err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data.toString());
                res.end();
            });
        }
        else if(req.url == '/about'){

            let file_path = path.join(__dirname, 'about_us.html');

            fs.readFile(file_path, function(err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data.toString());
                res.end();
            });
        }
}).listen(port);    

console.log('Server running on port ' + port);