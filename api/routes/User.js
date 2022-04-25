const express = require("express");
const routes = express.Router();
const mongoose = require("Mongoose");
const bodyparser = require("body-parser");
const User = require("../../model/user");
const fs = require("fs");
// const path = require("path");

const app = express();
app.use(bodyparser.json());

const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets/");
  },
  filename: function (req, file, cb) {
    cb(null, file.path + file.originalname);
    // path.extname(filename.originalname);
  },
});

// var storage = multer.memoryStorage()

var upload = multer({
  storage: storage,
});

routes.post("/", upload.single("resume"), (req, res) => {
  console.log(req);
  var file = fs.readFileSync(req.file.path);
  var encoder_file = file.toString("base64");
  var file_Final = Buffer.from(encoder_file, "base64");

  const response = req.body;

  const new_response = new User({
    _id:  new mongoose.Types.ObjectId(),
    Name: response.Name,
    Email: response.Email,
    Highest_Education: response.Highest_Education,
    post: response.post,
    Resume: file_Final,
    Experience: response.Experience,
  });
  new_response
    .save()
    .then((result) => {
      res.status(200).json(result);
      console.log("Message from the DB : success");
    })
    .catch((err) => {
      console.log(err);
      res.json(500).json({ err: err });
    });
});

module.exports = routes;