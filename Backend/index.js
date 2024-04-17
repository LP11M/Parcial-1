const mongodb = require("mongodb");

const connectionURL = "mongodb+srv://00423693:monito@atlascluster.wr1wwug.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";
//const connectionURL = "mongodb+srv://00423693:monito@atlascluster.wr1wwug.mongodb.net/";
const dbName = "Portafolio";

//get MongoClient
const MongoClient = mongodb.MongoClient;

let db = null;

MongoClient.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, connectedClient) => {
  if(err){
    throw err;
  }
  //connectedClient will be the connected instance of MongoClient
  db = connectedClient.db(dbName);
  //now you can write queries
  
  db.collection("project").find({}).toArray()
    .then(r => {
      console.log(r);
    }).catch(e => {
      console.error('ERROR:', e);
    })
})

//cd C:\Users\jpmaz\Desktop\Universidad 2.0\Semestre 8\1. Programación para internet\P1\Parcial-1\Backend

//mongodb+srv://00423693:monito@atlascluster.wr1wwug.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster

//Connection string:
//mongodb+srv://00423693:monito@atlascluster.wr1wwug.mongodb.net/
