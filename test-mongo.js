const { MongoClient } = require('mongodb');
async function test() {
  try {
    const uri = "mongodb+srv://milquufresh_db_user:aZMMrDxn0gaTQfpm@cluster0.xi68u7r.mongodb.net/brandkettle?appName=Cluster0";
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected successfully to server");
    await client.close();
  } catch (e) {
    console.error("Connection failed:", e.message);
  }
}
test();
