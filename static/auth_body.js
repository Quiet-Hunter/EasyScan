exports.header = '<html><head>    <meta charset="utf-8">    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"><link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script><script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>    <title>OWASP TOP 10 SCANNER</title><script>$(function(){'

+'$("#info").click(function(){$(this).closest("form").attr("action", "/info");$(this).closest("form").submit()});'

+'$("#inj").click(function() {$(this).closest("form").attr("action", "/injections");$(this).closest("form").submit()});'
+'$("#badauth").click(function() {$(this).closest("form").attr("action", "/badauth");$(this).closest("form").submit()});'
+'$("#direct").click(function() {$(this).closest("form").attr("action", "/direct");$(this).closest("form").submit()});'
+'$("#xss").click(function() {$(this).closest("form").attr("action", "/xss");$(this).closest("form").submit()});});'
+'</script>'
+'</head><body><div class="bloc l-bloc bgc-white" id="bloc-0">	  <div class="col-sm-10" style="position:relative;margin:auto;margin-top:0;float:none;">			<a href="/"><h3 align="center">OWASP TOP 10 SCANNER</h3></a>'
//form
+'<form method="POST" action="/info" align="center">				<div class="input-group" style="width: 100%;">    <input type="text" name="target" class="form-control" placeholder="Target">'
//
+' </div><div class="btn-group btn-group-justified">  <a href="#" class="btn btn-primary" id="info">Info</a>  <a href="#" class="btn btn-primary" id="inj">Injections</a>  <a href="#" class="btn btn-primary" id="badauth">Bad Auth</a>  <a href="#" class="btn btn-primary" id="xss">XSS</a>  <a href="#" class="btn btn-primary" id="direct">Direct Access</a>  <a href="#" class="btn btn-primary">CSRF</a>  <a href="#" class="btn btn-primary">Known Vuls</a>  <a href="#" class="btn btn-primary">Unsecure Reds</a> </div>						</form>	  '


exports.footer = '</div></div></body></html>'
