import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import AWS from 'aws-sdk';

const app = express();

app.use(bodyParser.urlencoded({extended: false, limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
    next();
});

var s3 = new AWS.S3();

const getS3Files = (req, res) => {
	var s3Calls = [];
	for (let i=1; i <= 6; i++) {
		let week;
		let params = {
			Bucket: 'imagarenaphotos',
			Delimiter: '/',
			Prefix: req.body.groupName + '/' + i + '/'
		}

		let promise = new Promise((resolve, reject) => {
			s3.listObjects(params, function (err, data) {
				if (err) {
					throw err;
					reject(err);
				}
				else {
					let week = data.Contents.map(function(x) {
						return "https://imagarenaphotos.s3.amazonaws.com/" + x.Key;
					});
					resolve(week);
				}
			});
		});

		s3Calls.push(promise);

	}

	return Promise.all(s3Calls).then((weeks) => {
		return weeks;
	});

}

const getGroupNames = (req, res) => {
	let params = {
		Bucket: 'imagarenaphotos',
		Delimiter: '/',
	}

	let promise = new Promise((resolve, reject) => {
		s3.listObjects(params, function (err, data) {
			if (err) {
				throw err;
				reject(err);
			}
			else {
				let groups = data.CommonPrefixes.map(function(x) {
					return x.Prefix.replace("/", "");
				});
				resolve(groups);
			}
		});
	});

	return promise.then((groups) => {
		return groups;
	});;
}

app.post('/get_class_photos', (req, res) => getS3Files(req, res).then( (weeks) => res.send(weeks) ) );
app.get('/get_groupnames', (req, res) => getGroupNames(req, res).then( (groups) => res.send(groups) ) );

var server = app.listen(3001,  () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log('node listening at http://%s:%s', host, port);
});
