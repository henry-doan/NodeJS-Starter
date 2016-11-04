// Modules

var hello = require('./helloWorld');
hello();

var greeting = require('./custom_hello');
greeting.hello();
greeting.customHello("Earth");
//reading / writing
// var fs = require('fs');
// var file = fs.createReadStream('my_file.txt');
// var newFile = fs.createWriteStream('my_file_copy.txt');
// file.pipe(newFile);
//read in the contents of the txt file and write them to a file of the copy

// var fs = require('fs');
// var http = require('http');
// http.createServer(function(request, response) {
// 	var uploadedFile = fs.createWriteStream("my_file_copy.txt");
// 	request.pipe(uploadedFile);
// 	request.on('end', function() {
// 		response.end("File has been uploaded");
// 	});
// }).listen(8080);

// var fs = require('fs');
// var file = fs.createReadStream('some_file.txt');
// var destinationFile = fs.createWriteStream('my_destination.txt');
// file.pipe(destinationFile, {end: false});
// fine.on('end', fucntion(){
// 	destinationFile.end('File copied');
// });

// Streams
// http.createServer( function(request, response) {
// 	 response.writeHead(200);
// 	 request.on('readable', function() {
// 	 	var chunk = null;
// 	 	while ( null !== ( chunk = request.read())) {
// 	 		response.write(chunk);
// 	 	}
// 	 });
// 	 request.on('end', function() { 
// 	 	response.end();
// 	 }) 
// }).listen(8080);

// http.createServer( function(request, reponse) {
// 	response.writeHead(200);
// 	request.pipe(response);
// }).listen(8080);

// events
// var EventEmitter = require('events').EventEmitter;
// var logger = new EventEmitter();
// logger.on('error', function(message) {
// 	console.log('ERROR: ' + message);
// });
// logger.emit('error', 'Something went wrong');

// var server = http.createServer();
// server.on('request', function(request, response) {
// 	fs.readFile("index.html", function(err, contents) {
// 		if (err) {
// 			response.writeHead(500, 'text/plain');
// 			logger.emit('error', err);
// 			response.end(err);
// 		} else {
// 			response.writeHead(200, 'text/html');
// 			response.end(contents);
// 		}
// 	})
// }).listen(8080);

// server.on('close', function() {
// 	console.log("Server shutting down ...");
// });

// var http = require("http");
// var fs = require('fs');
// http.createServer( function(request, response) {
// 	response.writeHead(200, {'Content-Type': 'text/html'});
// 	fs.readFile('index.html', function(err, content) {
// 		response.end(content);
// 	})
// }).listen(8080);
// console.log('Server running at http://localhost:8080/');

// non block code
// fs.readFile('/public/my_file.txt', function(err, contents) {
//  console.log(contents);
// });
// console.log("Im doing something else");

// is the same as
// var callback = function(err, contents) {
//   console.log(contents)
// }
// fs.readFile('/public/my_file.txt', callback);