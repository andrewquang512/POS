const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TypeProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
});
module.exports = mongoose.model("TypeProduct", TypeProductSchema);
