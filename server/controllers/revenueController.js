const express = require('express');
// const ClerkRoutes = express.Router();
let Order = require('../model/Order')

class revenueController {
    // GET /renenue/order
    showOrder(req, res) {
        Order.find(function(err, orders){
            if(err){
                console.log(err);
            }
            else {
                // orders.map(order => (
                //     {...order, SPECIAL: 'OK'}
                // ))
                res.json(orders)  
            }
        });
    }
    // POST /revenue.searchAcc
    searchAccountId(req, res) {
        Customer.findOne({id: req.body.searchAcount},function(err, account){
            if(err){
                console.log(err);
            }
            else {
                // console.log(typeof account);
                res.json(account);
            }
        })
    }
    // POST /revenue/searchItem
    searchItemId(req, res) {
        ProductItem.findOne({id: req.body.searchItem},function(err, item){
            if(err){
                console.log(err);
            }
            else {
                // console.log(typeof account);
                res.json(item);
            }
        })
    }
    // POST /revenue/searchProduct
    searchProductId(req, res) {
        Product.findOne({id: req.body.searchProduct},function(err, item){
            if(err){
                console.log(err);
            }
            else {
                console.log(item);
                res.json(item);
            }
        })
    }
    // POST /revenue/confirm
    confirmOrder(req, res) {
        Order.findOneAndUpdate({_id: req.body.idd}, {"isPaid": true}, function(err, result) {
            
            if(err){
                res.send(err)
            }
            else{
                res.json(result)
            }
        })
    }
}

module.exports = new revenueController();