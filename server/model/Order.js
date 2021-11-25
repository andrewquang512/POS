const mongoose = require('mongoose')

const Schema = mongoose.Schema
const OrderSchema = new Schema({
  OrderItems: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      img: { type: String },
    },
  ],
  userName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  tableseat: {
    type: String,
  },
  usingMethod: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false,
  },
  paidAt: {
    type: Date,
  },
  isDelivered: {
    type: Boolean,
    required: true,
    default: false,
  },
  deliveredAt: {
    type: Date,
  },
})

module.exports = mongoose.model('Order', OrderSchema)
