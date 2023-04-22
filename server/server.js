const express = require("express");
const app = express();
const cors = require("cors");
function run() {
  const db = require("./Dao/database");
  db.connectDB();
}
run();

app.use(cors());

const productRouter = require("./routes/bagsRouter");

app.use("/bags", productRouter);

var featuredProducts = require("./Models/ProductModel");

app.get("/", (req, res) => {
  featuredProducts
    .findByFeatured()
    .then((results) => res.json(results))
});

app.listen(5000, () => {
  console.log("Server is running");
});

module.exports.mongoose;
