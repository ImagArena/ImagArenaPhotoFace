var express = require('express');
var path = require('path');

const host = '0.0.0.0';
const port = '8000';

const app = express();
app.use(express.static(__dirname + "/dist"))

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(port, host, (err) => {
	if(err) console.log(err);
	console.log(`listening on port ${port}`);
});
