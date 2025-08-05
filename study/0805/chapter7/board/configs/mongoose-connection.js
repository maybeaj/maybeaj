const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();
const uri = process.env.MONGOOSE_URI;

module.exports = function () {
  return mongoose.connect(uri, { useNewUrlParser: true });
};
