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

function saveGroup(req, res) {
    let groupData = req.body;
    ops.connectToMongo().then(
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
  let photo = req.body;
  ops.connectToMongo().then(
    (client) => {
      let db = client.db('imagarena_groups');

      ops.addPhoto(db.collection('photos'), photo).then(
        (result) => { res.send(result) },
        (err) => {
          res.status(500);
          res.send(err);
        }
      );
    },
    (err) => {
      res.status(500);
      res.send(err);
    }
  );
}

app.post('/save_group', (req, res) => saveGroup(req, res) );
app.post('/save_photo', (req, res) => savePhoto(req, res) );

let server = app.listen(3001,  () => {
    let host = server.address().address;
    let port = server.address().port;

    console.log('node listening at http://%s:%s', host, port);
});
