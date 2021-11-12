const express = require("express");
const router = express.Router();
const Product = require("../model/Product");
// const multer = require("multer");
// const upload = multer({ dest: "img/" });
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads/");
//   },
//   filename: function (req, file, cb) {
//     let filename = "filenametogive";
//     req.body.file = filename;
//     cb(null, new Date().toISOString() + file.originalname);
//   },
// });
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./images");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });

// const fileFilter = (req, file, cb) => {
//   // reject a file
//   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 10 * 1024 * 1024,
//   },
//   fileFilter: fileFilter,
// });
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     console.log(req.body.internalUserID); // YAY, IT'S POPULATED
//     cb(null, "listing-pics/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "-" + Date.now());
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
router.post("/", async (req, res) => {
  // console.log(req.file);
  // console.log(req.files);
  // console.log(req.body);
  // console.log(req);
  const { name, catelory, price, count, description, img } = req.body;
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
      img,
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
router.put("/:id", async (req, res) => {
  const { name, catelory, price, count, description, img } = req.body;
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
      img,
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
