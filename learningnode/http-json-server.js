var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {  
      var parsedUrl = url.parse(req.url,true);
      var json;
      var isotime = parsedUrl.query.iso
      if(parsedUrl.pathname==='/api/parsetime'){
      	var date = new Date(isotime);
      	json = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            };
      }
      else if(parsedUrl.pathname==='/api/unixtime'){
      	json = {
      		unixtime: (new Date(isotime)).getTime()
      	};
      }

      if(json){
      	res.writeHead(200, { 'content-type': 'text/plain' });
      	res.end(JSON.stringify(json));
      }
      else{
      	res.writeHead(400);
      	res.end();
      }
});

server.listen(process.argv[2])