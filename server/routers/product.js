const express = require("express");
const router = express.Router();
const Product = require("../model/Product");

const multer = require("multer");

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb("JPEG and PNG only supported", false);
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limts: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

// const multer = require("multer");
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../uploads");
//   },

//   filename: function (req, file, cb) {
//     let filename = "filenametogive";
//     req.body.file = filename;

//     cb(null, filename);
//   },
// });

// var upload = multer({ storage: storage });

// GET http://localhost:5000/api/product
// Gui product len server
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.send({ success: true, products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// POST http://localhost:5000/api/product
// Gui product len server
router.post("/", upload.single("img"), async (req, res) => {
  const { name, catelory, price, count, description } = req.body;
  // Check name
  if (!name)
    return res
      .status(400)
      .json({ success: false, message: "Name is required" });
  try {
    // All good
    const newProduct = new Product({
      name,
      catelory,
      price,
      count,
      description,
      img: `http://localhost:5000/${req.file.path}`,
    });
    await newProduct.save();
    res.send({
      success: true,
      message: "Product is created",
      product: newProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
// PUT http://localhost:5000/api/product/id
// Update data len server
router.put("/:id", upload.single("img"), async (req, res) => {
  const { name, catelory, price, count, description } = req.body;
  // Check name
  if (!name)
    return res
      .status(400)
      .json({ success: false, message: "Name is required" });

  console.log(req.params.id);
  try {
    // All good
    let updateProduct = {
      name,
      catelory,
      price,
      count,
      description,
      img: req.file ? `http://localhost:5000/${req.file.path}` : req.body.img,
    };
    const conditionUpdated = { _id: req.params.id };
    updateProduct = await Product.findOneAndUpdate(
      conditionUpdated,
      updateProduct,
      {
        new: true,
      }
    );
    res.send({ success: true, product: updateProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// DELETE http://localhost:5000/api/product/id
// Delete product

router.delete("/:id", async (req, res) => {
  try {
    const conditionUpdated = { _id: req.params.id };
    const productDeleted = await Product.deleteOne(conditionUpdated);
    res.send({
      success: true,
      message: "delete done",
      product: productDeleted,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// get product theo id

router.get("/:id", async (req, res) => {
  const conditionFilter = { catelory: req.params.id };
  // const id=req.params.id
  try {
    const products = await Product.find(conditionFilter);
    res.send({ success: true, products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
