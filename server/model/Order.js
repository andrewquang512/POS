const mongoose = require('mongoose')

const Schema = mongoose.Schema
const OrderSchema = new Schema({
  OrderItems: [
    {
      name: { type: String, required: true },
      count: { type: Number, required: true },
      img: { type: String, required: true },
      price: { type: Number, required: true },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
    },
  ],
  paymentMethod: {
    type: String,
    required: true,
    default: 'Cash',
  },
  paymentResult: {
    id: { type: String },
    status: { type: String },
    update_time: { type: String },
    email_address: { type: String },
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
