const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController.js");

router
  .route('/')
  .post(orderController.addOrderItems)
  .get(orderController.getOrders)
router.route('/:id').get(orderController.getOrderById)
router.route('/:id/pay').put(orderController.updateOrderToPaid)
router.route('/:id/deliver').put(orderController.updateOrderToDelivered)

module.exports = router;
