const { MongoClient } = require("mongodb");
require("dotenv").config();
const uri = process.env.MONGODB_URI; 


module.exports = function (callback) {
  return MongoClient.connect(uri, callback);
};
