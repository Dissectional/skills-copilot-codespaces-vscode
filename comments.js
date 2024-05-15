// Create web server
// Run node comments.js
// Open browser and navigate to localhost:3000
// Enter a comment and click "Submit"
// Refresh the page to see the comment you entered

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var path = require('path');
var comments = require('./comments.json');
var qs = require('querystring');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  if (request.method === 'POST') {
    var body = '';

    request.on('data', function(data) {
      body += data;
    });

    request.on('end', function() {
      var comment = qs.parse(body);
      comments.push(comment);
      fs.writeFile('./comments.json', JSON.stringify(comments), function(error) {
        if (error) {
          console.log(error);
          return;
        }
      });
    });
  }

  response.writeHead(200, {"Content-Type": "text/html"});
  fs.createReadStream('./index.html').pipe(response);
});

// Listen on port 3000, IP defaults to