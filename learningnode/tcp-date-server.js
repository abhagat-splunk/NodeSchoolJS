var net = require('net')

function zeroPad(str, charToPad) {
    if (typeof str !== 'string') {
       str = String(str);
    }
	return (str.length === 1) ? ('0' + str) : str;
}

var server = net.createServer(function listener(socket){
	var dateStr;
    var date = new Date();

    dateStr  = date.getFullYear() + '-';
    // getMonth() start at 0, thus, we add one to it.
    dateStr += zeroPad(date.getMonth() + 1) + '-';
    dateStr += zeroPad(date.getDate()) + ' ';
    dateStr += zeroPad(date.getHours()) + ':';
    dateStr += zeroPad(date.getMinutes()) + '\n';

    socket.write(dateStr);

    socket.end();
	
})

server.listen(process.argv[2]);