var express = require('express');
var app = express();
var path =  require('path');

app.use('/imgs',express.static(path.join(__dirname, 'public/imgs')));
app.use('/js',express.static(path.join(__dirname, 'public/js')));
app.use('/css',express.static(path.join(__dirname, 'public/stylesheets')));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(3000, function(){
	console.log('Running on port 3000');
})

