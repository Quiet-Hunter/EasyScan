var querystring = require("querystring");var fs = require('fs');function start(request, response, postData) {	var  scan_body = require('./static/auth_body');	response.writeHead(200, {"Content-Type": "text/html"});	response.write(scan_body.header + "<h3>Enter a target and wait for some days</h3>" +scan_body.footer);	response.end();}function info(request, response, postData) {	var  scan_body = require('./static/auth_body');	if (postData){	const exec = require('child_process').exec;	exec('bash ./tools/getinfo.sh '+querystring.parse(postData).target, (error, stdout, stderr) => {  	  if (error) {			response.writeHead(200, {"Content-Type": "text/html"});    		response.write(scan_body.header + '<h2>'+querystring.parse(postData).target+'</h2>'+ '<p>'+`Exec error: ${error}`+'</p>'+ scan_body.footer);			console.error(`exec error: ${error}`);			response.end();    		return;  	  }  	  //console.log(`stdout: ${stdout}`);  	  //console.log(`stderr: ${stderr}`);	response.writeHead(200, {"Content-Type": "text/html"});	response.write(scan_body.header + '<h2>'+querystring.parse(postData).target+'</h2>'+ '<p>'+`${stdout}`+'</p>'+ scan_body.footer);	response.end();	});	}	else {	response.writeHead(200, {"Content-Type": "text/html"});	response.write(scan_body.header + scan_body.footer);	response.end();	}}exports.start = start;exports.info = info;  