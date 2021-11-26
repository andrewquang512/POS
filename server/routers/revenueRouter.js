const express = require("express");
const router = express.Router();

const revenueController = require('../controllers/revenueController')

router.get('/order', revenueController.showOrder);
router.post('/confirm', revenueController.confirmOrder);
router.get('/food', revenueController.showFood);
router.get('/type', revenueController.showType);
// router.post('/searchAccount', revenueController.searchAccountId);
// router.post('/searchItem', revenueController.searchItemId);
// router.post('/searchProduct', revenueController.searchProductId);
module.exports = router;