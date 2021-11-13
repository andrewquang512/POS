const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const productRouter = require("./routers/product");
const typeProductRouter = require("./routers/typeProduct");
// const fileUpload = require("express-fileupload");
const app = express();

app.use("/profile", productRouter);

connectDB();
app.use(cors());
app.use(express.json());
// app.use(fileUpload());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
var fileupload = require("express-fileupload");
// app.use(fileupload());
app.use("/uploads", express.static("uploads"));

app.use("/api/product/", productRouter);
app.use("/api/typeproduct/", typeProductRouter);
// app.get("/", (req, res) => res.send("Hello all!"));

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
