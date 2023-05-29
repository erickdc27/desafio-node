const express = require('express');

const app = express();

app.get('/', function (req, res) {
	res.send('Ola Mundo!');
});

app.listen(8000, function () {
	console.log('App ouvindo na porta 8000!');
});

app.post('/post', (req, res) => {
	res.send(`POST concluido`);
});

app.delete('/deletar', (req, res) => {
	res.send(`delete concluido`);
});
