const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", productRoute);
app.get("/", (req, res) => {
  res.send("Server is Up and running!");
});

mongoose
  .connect(
    "mongodb+srv://deepakavadhani2:Karki%231@restapidb.ahooyxq.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3001, () => {
      console.log("Server started on port 3001");
    });
  })
  .catch((err) => {
    console.log("connection failed");
  });
