const mongoose = require("Mongoose");

  const User = mongoose.model("FormResponse", {
    _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    Email: String,
    Highest_Education: String,
    post: String,
    Resume: Buffer,
    Experience: String,
  });

  module.exports = User