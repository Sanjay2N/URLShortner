const mongoose = require("mongoose");

exports.connectMongoDB = async (url) => {
  return await mongoose.connect(url);
};
