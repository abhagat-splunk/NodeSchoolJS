var fs = require('fs')

fs.readdir(process.argv[2], function filterFiles(error, filesList){
	if (error) return console.error(error)
	var txtFiles = filesList.filter(function(file){
		return (file.indexOf('.'+process.argv[3]) !== -1);
	})
	printFiles(txtFiles);
})

function printFiles(files){
	for(var i=0;i<files.length;i++){
		console.log(files[i]);
	}
}