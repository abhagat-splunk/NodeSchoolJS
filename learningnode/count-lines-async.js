var fs = require('fs')

fs.readFile(process.argv[2], function finishedReading(error,fileData){
	if(error)	return console.log(error);
	var numberOfLines = fileData.toString().split('\n').length-1;
	console.log(numberOfLines);
});