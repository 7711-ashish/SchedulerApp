const mongoose = require("mongoose");

//CONNECTING TO DATABASE
mongoose
  .connect(
    "mongodb+srv://Ashish_7711:Ashish_7711@cluster0.px67q.mongodb.net/MERNTRUCK?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });