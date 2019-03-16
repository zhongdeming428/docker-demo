const express = require('express');
const app = express();
const {db} = require('./database')


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
 
// const db = MongoClient.connect(url, (err, dbo) => {
//   console.log(dbo.db('count').collection('count').find().toArray())
// });

app.use('*',async (req, res) => {
  const client = await db;
  console.log(client)
  await client.db('count').collection('count').insertOne({
    count: 1
  });
  return res.end('It\'s OK!');
});

app.listen(3000, () => {
  console.log('Server listening at port 3000...');
});

