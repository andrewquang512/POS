const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  catelory: {
    type: Schema.Types.ObjectId,
    ref: "TypeProduct",
  },
  price: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
});
module.exports = mongoose.model("Product", ProductSchema);
