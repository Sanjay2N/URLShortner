const Express = require("express");
const mongoose = require("mongoose");
const { connectMongoDB } = require("./utils/connectMongo");

const urlRout = require("./routes/url");

const app = new Express();

app.use(Express.json());
app.use(urlRout);

connectMongoDB(
  "mongodb+srv://sanjay:dFUVJO8vzo0chWvH@cluster0.jkknfem.mongodb.net/"
)
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log(error);
  });

const PORT = 2000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}...`);
});
