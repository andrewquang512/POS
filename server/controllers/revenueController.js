const express = require('express');
// const ClerkRoutes = express.Router();
let Order = require('../model/Order')
let Product = require('../model/Product')
let Type = require('../model/TypeProduct')

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
    // GET /renenue/food
    showFood(req, res) {
        Product.find(function(err, foods){
            if(err){
                console.log(err);
            }
            else {
                // orders.map(order => (
                //     {...order, SPECIAL: 'OK'}
                // ))
                res.json(foods)  
            }
        });
    }
    // GET /renenue/type
    showType(req, res) {
        Type.find(function(err, types){
            if(err){
                console.log(err);
            }
            else {
                // orders.map(order => (
                //     {...order, SPECIAL: 'OK'}
                // ))
                res.json(types)  
            }
        });
    }
}

module.exports = new revenueController();