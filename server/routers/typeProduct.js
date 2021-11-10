const express = require("express");
const router = express.Router();
const TypeProduct = require("../model/TypeProduct");

// GET http://localhost:5000/api/typeproduct
// Lay all product
router.get("/", async (req, res) => {
  try {
    const typeProducts = await TypeProduct.find({});
    res.send({ success: true, typeProducts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// POST http://localhost:5000/api/typeproduct
// Gui type product len server
router.post("/", async (req, res) => {
  try {
    const { name, img } = req.body;
    // Check name
    if (!name)
      return res
        .status(400)
        .json({ success: false, message: "Name is required" });
    // All good
    const newTypeProduct = new TypeProduct({
      name,
      img,
    });
    await newTypeProduct.save();
    res.send({
      success: true,
      message: "TypeProduct is created",
      typeProduct: newTypeProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// PUT http://localhost:5000/api/typeproduct/id
// Update typeproduct len server
router.put("/:id", async (req, res) => {
  const { name, img } = req.body;
  // Check name
  if (!name)
    return res
      .status(400)
      .json({ success: false, message: "Name is required" });

  console.log(req.params.id);
  try {
    // All good
    let updateTypeProduct = {
      name,
      img,
    };
    const conditionUpdated = { _id: req.params.id };
    updateTypeProduct = await TypeProduct.findOneAndUpdate(
      conditionUpdated,
      updateTypeProduct,
      {
        new: true,
      }
    );
    res.send({ success: true, typeProduct: updateTypeProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// DELETE http://localhost:5000/api/typeproduct/id
// Delete product

router.delete("/:id", async (req, res) => {
  try {
    const conditionUpdated = { _id: req.params.id };
    const typeProductDeleted = await TypeProduct.deleteOne(conditionUpdated);
    res.send({
      success: true,
      message: "delete done",
      product: typeProductDeleted,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
// DELETE http://localhost:5000/api/typeproduct/id
// Delete product

router.get("/:id", async (req, res) => {
  const conditionFilter = { _id: req.params.id };
  // const id=req.params.id
  try {
    const typeProduct = await TypeProduct.find(conditionFilter);
    res.send({ success: true, typeProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
module.exports = router;
