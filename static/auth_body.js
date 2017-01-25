exports.header = '<html><head>    <meta charset="utf-8">    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"><link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script><script src=http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>    <title>Авторизация в системе</title></head><body><div class="bloc l-bloc bgc-white" id="bloc-0">	  <div class="col-sm-10" style="position:relative;margin:auto;margin-top:0;float:none;">			<h3 align="center">OWASP TOP 10 SCANNER</h3>'
//form
+'<form method="POST" action="/" align="center">				<div class="input-group">    <input type="text" name="target" class="form-control" placeholder="Target"><br/><br/> '
//
+'<div class="input-group-btn">      <button class="btn btn-default" type="submit">        <i class="glyphicon glyphicon-screenshot"></i>      </button>    </div>  </div><div class="btn-group btn-group-justified">  <a href="#" class="btn btn-primary">Info</a>  <a href="#" class="btn btn-primary">Injections</a>  <a href="#" class="btn btn-primary">Bad Auth</a>  <a href="#" class="btn btn-primary">XSS</a>  <a href="#" class="btn btn-primary">Direct Access</a>  <a href="#" class="btn btn-primary">CSRF</a>  <a href="#" class="btn btn-primary">Known Vuls</a>  <a href="#" class="btn btn-primary">Unsecure Reds</a> </div>						</form>	  '


exports.footer = '</div></div></body></html>'
