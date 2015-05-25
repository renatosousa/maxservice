var express = require('express');
var app = express();
var http = require('http');
 var url = require('url');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
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

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
