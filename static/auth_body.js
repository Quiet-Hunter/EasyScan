exports.header = '<html><head>    <meta charset="utf-8">    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"><link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"><script src="//ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script><script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>    <title>Easy Scan</title><script>$(function(){'

+'$("#info").click(function(){$(this).closest("form").attr("action", "/info");$(this).closest("form").submit()});'

+'$("#inj").click(function() {$(this).closest("form").attr("action", "/injections");$(this).closest("form").submit()});'
+'$("#badauth").click(function() {$(this).closest("form").attr("action", "/badauth");$(this).closest("form").submit()});'
+'$("#direct").click(function() {$(this).closest("form").attr("action", "/direct");$(this).closest("form").submit()});'
+'$("#recomends").click(function() {$(this).closest("form").attr("action", "/recomends");$(this).closest("form").submit()});'
+'$("#known").click(function() {$(this).closest("form").attr("action", "/known");$(this).closest("form").submit()});'
+'$("#redirs").click(function() {$(this).closest("form").attr("action", "/redirs");$(this).closest("form").submit()});'
+'$("#xss").click(function() {$(this).closest("form").attr("action", "/xss");$(this).closest("form").submit()});});'
+'</script>'
+'</head><body><div class="bloc l-bloc bgc-white" id="bloc-0">	  <div class="col-sm-10" style="position:relative;margin:auto;margin-top:0;float:none;">			<a href="/"><h1 align="center">Easy Scan</h1></a>'
//form
+'<form method="POST" action="/info" align="center">				<div class="input-group" style="width: 100%;">    <input type="text" name="target" class="form-control" placeholder="Target">'
//
+' </div><div class="btn-group btn-group-justified">  <a href="#" class="btn btn-primary" id="info">Info</a>  <a href="#" class="btn btn-primary" id="recomends">Recommendations</a>  <a href="#" class="btn btn-primary" id="xss">XSS</a>  <a href="#" class="btn btn-primary" id="inj">Injections</a>  <a href="#" class="btn btn-primary" id="direct">Direct Access</a>  <a href="#" class="btn btn-primary" id="known">Known Vulns</a>  <a href="#" class="btn btn-primary" id="redirs">Unsecure Redirects</a> </div>						</form>	  '


exports.footer = '</div></div></body></html>'


exports.sql_recs = '<h4>OWASP Recommendations:</h4><p>'
+'Preventing injection requires keeping untrusted data separate from commands and queries.<br>'
+'<ul><li>The preferred option is to use a safe API which avoids the use of the interpreter entirely or provides a parameterized interface. Be careful with APIs, such as stored procedures, that are parameterized, but can still introduce injection under the hood.</li>'
+'<li>If a parameterized API is not available, you should carefully escape special characters using the specific escape syntax for that interpreter. OWASP’s ESAPI provides many of these escaping routines.</li>'
+'<li>Positive or “white list” input validation is also recommended, but is not a complete defense as many applications require special characters in their input. If special characters are required, only approaches 1. and 2. above will make their use safe. OWASP’s ESAPI has an extensible library of white list input validation routines.</li>'
+'</ul></p>'

exports.xss_recs = '<h4>OWASP Recommendations:</h4><p>'
+'Preventing XSS requires separation of untrusted data from active browser content.<br>'
+'<ul><li>The preferred option is to properly escape all untrusted data based on the HTML context (body, attribute, JavaScript, CSS, or URL) that the data will be placed into. See the OWASP XSS Prevention Cheat Sheet for details on the required data escaping techniques</li>'
+'<li>Positive or “whitelist” input validation is also recommended as it helps protect against XSS, but is not a complete defense as many applications require special characters in their input. Such validation should, as much as possible, validate the length, characters, format, and business rules on that data before accepting the input.</li>'
+'<li>For rich content, consider auto-sanitization libraries like OWASP’s AntiSamy or the Java HTML Sanitizer Project.</li>'
+'<li>Consider Content Security Policy (CSP) to defend against XSS across your entire site.</li>'
+'</ul></p>'

exports.direct_recs = '<h4>OWASP Recommendations:</h4><p>'
+'Preventing insecure direct object references requires selecting an approach for protecting each user accessible object (e.g., object number, filename):<br>'
+'<ul><li>Use per user or session indirect object references. This prevents attackers from directly targeting unauthorized resources. For example, instead of using the resource’s database key, a drop down list of six resources authorized for the current user could use the numbers 1 to 6 to indicate which value the user selected. The application has to map the per-user indirect reference back to the actual database key on the server. OWASP’s ESAPI includes both sequential and random access reference maps that developers can use to eliminate direct object references. </li>'
+'<li>Check access. Each use of a direct object reference from an untrusted source must include an access control check to ensure the user is authorized for the requested object.</li>'
+'</ul></p>'

exports.owasp_recs = '<h4>Using remote components:</h4> <p><span style="color:green;">Try to get rid of the dependencies</span></p> <h4>Recommendations</h4> <p><span style="color:green;">Use the following headers to prevent attacks:</span><br> <span style="color:red;">X-XSS-Protection</span> - to prevent XSS attacks<br> <span style="color:red;">HttpOnly</span> - the cookie cannot be accessed through client side script<br> <span style="color:red;">HTTP Strict Transport Security</span> - will prevent any communications from being sent over HTTP to the specified domain and will instead send all communications over HTTPS<br> <span style="color:red;">X-Frame-Options</span> -  to indicate whether or not a browser should be allowed to render a page in a frame<br> <span style="color:red;">X-Content-Type-Options</span> - It prevents the browser from doing MIME-type sniffing<br> <span style="color:red;">Content Security Policy</span> - allows web site administrators to control resources the user agent is allowed to load for a given page </p>'

exports.known_recs = '<h4>OWASP Recommendations:</h4><p>'
+'One option is not to use components that you didn’t write. But that’s not very realistic. </p><p>Most component projects do not create vulnerability patches for old versions. Instead, most simply fix the problem in the next version. So upgrading to these new versions is critical. Software projects should have a process in place to:'
+'<ul><li>Identify all components and the versions you are using, including all dependencies. (e.g., the versions plugin).</li>'
+'<li>Monitor the security of these components in public databases, project mailing lists, and security mailing lists, and keep them up to date.</li>'
+'<li>Establish security policies governing component use, such as requiring certain software development practices, passing security tests, and acceptable licenses.</li>'
+'<li>Where appropriate, consider adding security wrappers around components to disable unused functionality and/or secure weak or vulnerable aspects of the component.</li>'
+'</ul></p>'

exports.redirs_recs = '<h4>OWASP Recommendations:</h4><p>'
+'Safe use of redirects and forwards can be done in a number of ways:<br>'
+'<ul><li>Simply avoid using redirects and forwards</li>'
+'<li>If used, don’t involve user parameters in calculating the destination. This can usually be done.</li>'
+'<li>If destination parameters can’t be avoided, ensure that the supplied value is valid, and authorized for the user. It is recommended that any such destination parameters be a mapping value, rather than the actual URL or portion of the URL, and that server side code translate this mapping to the target URL. Applications can use ESAPI to override the sendRedirect() method to make sure all redirect destinations are safe. </li>'
+'</ul>Avoiding such flaws is extremely important as they are a favorite target of phishers trying to gain the user’s trust.</p>'

exports.wrong_input = '<h4>WRONG TARGET URL!</h4>'