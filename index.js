var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/info"] = requestHandlers.info;
handle["/injections"] = requestHandlers.injections;
handle["/badauth"] = requestHandlers.badauth;

server.start(router.route, handle);