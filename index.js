var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/info"] = requestHandlers.info;
handle["/injections"] = requestHandlers.injections;
handle["/xss"] = requestHandlers.xss;
handle["/direct"] = requestHandlers.direct;
handle["/recomends"] = requestHandlers.recomends;
handle["/known"] = requestHandlers.known;
handle["/redirs"] = requestHandlers.redirs;

server.start(router.route, handle);