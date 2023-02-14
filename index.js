const express = require("express");
const app = express();
const PORT = 8080;

const bodyparser = require("body-parser")
//middleware
app.use(bodyparser.json());
 
//mongoDb   ---> to be in confug env
require("dotenv").config({ path: __dirname + "/.env" });
const mongoose = require("mongoose");

mongoose.set("strictQuery", false); // for warnings
mongoose.connect(
  `${process.env.DB_URL}/${process.env.DB}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successfully connected");
    }
  }
);

//import routes
const postRoute = require("./routes/posts")
//Routes
app.use('/posts',postRoute);

//listening port
app.listen(PORT,
    ()=>{
        console.log("connected at "+ PORT)
    })