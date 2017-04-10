var express = require('express');

const host = '0.0.0.0';
const port = '80';

const app = express();
app.use(express.static(__dirname + "/dist/"))

app.listen(port, host, (err) => {
	if(err) console.log(err);
	console.log(`listening on port ${port}`);
//	app.get('*', (req, res) => res.sendFile(__dirname + '/dist/index.html'));
});
