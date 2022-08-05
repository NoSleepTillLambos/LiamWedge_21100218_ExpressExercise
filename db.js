const { MongoClient } = require("mongodb");

// initialize the database connection
let dbConnection;

module.exports = {
  // first establish the connection
  connectToDb: (cb) => {
    MongoClient.connect("mongodb://localhost:27017/topMart")
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
