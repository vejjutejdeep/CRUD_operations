const express = require("express");
const mongoose = require("mongoose");
const starRouter = require("../CRUD2/routes/starwarroutes");

const app = express();

// app.use(express.json());

mongoose.connect(
  "mongodb+srv://star:rh65kq@cluster0.qnu5u.mongodb.net/star?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

app.use("/",starRouter);
app.listen(3000, () => {
  console.log("Server is running...");
});