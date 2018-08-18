var http = require('http')

var result = '';
var count = 0;
var url = process.argv[2];
http.get(url,function(response){
	response.setEncoding('utf8');
	
	response.on("end", function(){
		console.log(count);
		console.log(result);
	});
	response.on("data", function(data){
		result += data;
		count += data.length;
	})
	response.on("error", console.error);
});
