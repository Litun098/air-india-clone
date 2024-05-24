const mongoose = require("mongoose");
require("dotenv").config()

const connect = async () => {
  console.log("MongoDB connected requested");
  return await mongoose
    .connect(
      process.env.mongoURL
    )
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  connect,
};
