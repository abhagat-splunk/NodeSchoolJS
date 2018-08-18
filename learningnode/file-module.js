var fs = require('fs')

module.exports = function(directory,extension,callback){
	fs.readdir(directory, function filterFiles(error, filesList){
	if (error) return callback(error);
	var txtFiles = filesList.filter(function(file){
		return (file.indexOf('.'+extension) !== -1);
	})
	callback(null,txtFiles);
	})	
}


