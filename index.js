const express = require('express');

const app = express();

app.get('/', function (req, res) {
	res.send('Ola Mundo!');
});

app.listen(8000, function () {
	console.log('App ouvindo na porta 8000!');
});