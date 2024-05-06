var app = require('./app');
var port = 3700;
const { MongoClient } = require('mongodb');

const connectionURL = "mongodb+srv://juan:juan@atlascluster.wr1wwug.mongodb.net/";
const dbName = "Portafolio";

let db = null;

async function connectToMongoDB() {
  try {
    const client = new MongoClient(connectionURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected successfully to MongoDB');

    const db = client.db(dbName);

    // Example: Query documents from "projects" collection
    const projectsCollection = db.collection('project');
    const projects = await projectsCollection.find({}).toArray();
    console.log('Retrieved projects:', projects);
    app.listen(port,() => {
      console.log("Servidor corriendo correctamente en la url: localhost:3700");
    });
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}
connectToMongoDB();