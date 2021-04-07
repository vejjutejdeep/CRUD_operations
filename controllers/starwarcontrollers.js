const express = require("express");
const starModel = require("../models/starwarmodule");
// const starwar = require("../modules/starwarmodule");

const app = express();

app.use(express.json())


const index = async (request, response) => {

  try {
    const quotes = await starModel.find({});
    console.log("data found")
    response.send(quotes);
  } catch (error) {
    response.status(500).send(error);
  }
  return null
}

const store = async(request, response) => {
  // console.log("em")
  console.log(request.body)
  
  try{
      const starwar = new starModel(request.body);
      await starwar.save();
      response.send(starwar)
  } catch(error) {
      response.status(500).send(error);
  }
  return null
}

const upda = async (request, response) => {
  try {
    console.log(request.body)
    await starModel.findByIdAndUpdate(request.params.id, request.body);
    const quotes = await starModel.findOne({"name": request.body}).exec();
    response.send(quotes);
    await starModel.save();
  } catch (error) {
    response.status(500).send(error);
  }
  return null
}

const dele = async (request, response) => {
  try {
    console.log(request.params.id)
    const star = await starModel.findByIdAndDelete(request.params.id);
    console.log("deleted")
    if (!star) response.status(404).send("No item found");
    response.status(200).send("deleted");
  } catch (error) {
    response.status(500).send(error);
  }
  return null
}

module.exports = {
  index, store, upda, dele
}