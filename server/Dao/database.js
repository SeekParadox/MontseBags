const mongoose = require("mongoose");
require("dotenv").config();
const dbConnection = process.env.MONGODB_TEST;

module.exports.connectDB = () => {
  try {
    mongoose.connect(dbConnection);
    console.log("Connection established with MongoDb");
  } catch (error) {}
};

module.exports.getDB = () => {
  return mongoose;
};
