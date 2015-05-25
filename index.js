var http = require('http');
 var url = require('url');
   
  var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Dados da query string</h1>");
    var result = url.parse(request.url, true);
    for(var key in result.query){
     if(key == "teste"){
		response.write("<h2>"+result.query[key]+"</h2>");
	 } else {
		response.write("<h2>"+ key + "Não é um parâmetro válido" + "</h2>");
	 }
   } 
   response.end();
 });
 server.listen("3000", function(){
   console.log('Servidor http.');
});
