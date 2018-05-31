import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import AWS from 'aws-sdk';
import mongodb from 'mongodb';
import ops from './db_operations';

const app = express();

app.use(bodyParser.urlencoded({extended: false, limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
    next();
});

let SERVERUSER =  process.argv[2];
let SERVERPWD = process.argv[3];

// POST

function saveGroup(req, res) {
    let groupData = req.body;
    ops.connectToMongo(groupData.auth).then(
      (client) => {
        let db = client.db('imagarena_groups');

        ops.addGroup(db.collection('groups'), groupData)
        .then( (result) => {
          console.log("Saved", groupData.groupName);
          res.send(result);
        })
      },
      (err) => {
        res.status(500);
        res.send(err);
      }
    );
}

function savePhoto(req, res) {
  let photoData = req.body;

  let bucketUrl = "https://s3-us-west-2.amazonaws.com/imagarenaphotos/";
  if (!photoData.url.startsWith(bucketUrl)) {
    res.status(400).send("Photo is not from the ImagArena Bucket");
  }

  ops.connectToMongo(photoData.auth).then(
    (client) => {
      let db = client.db('imagarena_groups');

      ops.addPhoto(db.collection('photos'), photoData).then(
        (result) => { res.send(result) },
        (err) => {
          res.status(500).send(err);
        }
      );
    },
    (err) => {
      res.status(500).send(err);
    }
  );
}

function getPhotosForGroup(req, res) {
  ops.connectToMongo({user: SERVERUSER, pwd: SERVERPWD}).then(
    (client) => {
      let db = client.db('imagarena_groups');
      let groupName = req.body.groupName;

      ops.getPhotos(db.collection('photos'), groupName)
      .then(
        (result) => { res.send({photos: result}); },
        (err) => {
          res.status(500).send(err);
        }
      );
    },
    (err) => {
      res.status(500).send(err);
    }
  );
}

// END POST

// GET

function getGroupNames(req, res) {
  ops.connectToMongo({user: SERVERUSER, pwd: SERVERPWD}).then(
    (client) => {
      let db = client.db('imagarena_groups');

      ops.getGroupNames(db.collection('photos'))
      .then(
        (result) => { res.send({groups: result}) },
        (err) => {
          res.status(500).send(err);
        }
      );
    },
    (err) => {
      res.status(500).send(err);
    }
  );
}

// END GET

app.post('/save_group', (req, res) => saveGroup(req, res) );
app.post('/save_photo', (req, res) => savePhoto(req, res) );
app.post('/get_class_photos', (req, res) => getPhotosForGroup(req, res) );

app.get('/get_groupnames',   (req, res) => getGroupNames(req, res) );

let server = app.listen(3001,  () => {
    let host = server.address().address;
    let port = server.address().port;

    console.log('node listening at http://%s:%s', host, port);
});
