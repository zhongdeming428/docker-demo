var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
if (process.env.NODE_ENV === 'production') {
  url = "mongodb://db:27017/";
}
 
const db = MongoClient.connect(url);
module.exports = {
  db
}