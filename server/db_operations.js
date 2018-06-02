import mongodb from 'mongodb';

export default {

  connectToMongo(auth) {
    return new Promise( (resolve, reject) => {
      let MongoClient = mongodb.MongoClient;
      let url = `mongodb://${auth.user}:${auth.pwd}@localhost:27017/?authMechanism=DEFAULT&authSource=auth`;

      MongoClient.connect(url, (err, client) => {
        if (err) reject(err);
        resolve(client);
      });
    });
  },

  addGroup(collection, group) {
    return collection.findOne(group)
    .then(
      function success(result) {
        if (result != null) return result;

        return collection.insertOne(group).then( (res) => {
          return res.ops[0];
        } );
      },
      function error(err) {
        throw err;
      }
    )
  },

  addPhoto(collection, photoData) {
    return collection.findOne(photoData)
    .then(
      function success(photo) {
        if (photo != null) return photo; // Picture is already in db

        return collection.insertOne(photoData).then( (res) => {return res.ops[0]} );
      },
      function error(err) {
        throw err;
      }
    )
  },

  getPhotos(collection, groupName) {
    let cursor = collection.find({groupName: groupName});
    let photos = [];

    return new Promise( (resolve, reject) => {
      cursor.each( (err, item) => {
          if (err)          reject(err);
          if (item == null) resolve(photos);
          else { photos.push(item.url) }
      });
    });
  },

  getGroupNames(collection, params) {
    let cursor = collection.find(params);
    let groups = [];

    return new Promise( (resolve, reject) => {
      cursor.each( (err, item) => {
          if (err)          reject(err);
          if (item == null) resolve(groups);
          else { groups.push(item) }
      });
    });
  },


}
