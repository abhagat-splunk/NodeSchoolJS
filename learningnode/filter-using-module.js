var fm = require('./file-module')

var directory = process.argv[2];
var extension = process.argv[3];
fm(directory,extension,printFiles);

function printFiles(error,files){
	for(var i=0;i<files.length;i++){
		console.log(files[i]);
	}
}
