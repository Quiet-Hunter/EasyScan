var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    request.setEncoding("utf8");

    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk '"+
      postDataChunk + "'.");
    });

    request.addListener("end", function() {
      route(handle, pathname, request, response, postData);
    });
	
  }

  var server = http.createServer(onRequest).listen(8888,'192.168.1.38');
  console.log("Server has started at 8888, '192.168.1.38'.");
  server.timeout = 999999999999999999;
}

exports.start = start;
