const express = require("express");
// const bodyparser = require('body-parser');
const productroutes = require("./api/routes/User");
const downloadForm = require("./api/routes/download");

const app = express();
const mongoose = require("Mongoose");
mongoose
  .connect(
    "mongodb+srv://Kushagra_Aggarwal:Welcome123@cluster0.ssigl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(console.log("Connection to db successfull"))
  .catch((err) => console.log(err));
// app.use(bodyparser)
app.use("/download", downloadForm);
app.use("/Submitform", productroutes);

app.use((req, res) => {
  res.status(200).json({
      message: "Server is up and running",
    });
});

module.exports = app