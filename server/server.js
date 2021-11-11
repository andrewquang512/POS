const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const productRouter = require("./routers/product");
const typeProductRouter = require("./routers/typeProduct");
connectDB();

const app = express();
var fileupload = require("express-fileupload");
app.use(fileupload());
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(cors());

app.use("/api/product", productRouter);
app.use("/api/typeproduct", typeProductRouter);
// app.get("/", (req, res) => res.send("Hello all!"));

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
