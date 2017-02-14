'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const mongoose = require('mongoose');
const restaurantCtrl = require('./RestaurantController');

router.post('/add', restaurantCtrl.addRestaurant);
router.delete('/delete/:id', restaurantCtrl.deleteRestaurant);
router.patch('/update/:id', restaurantCtrl.updateRestaurant);
router.get('/', restaurantCtrl.viewRestaurant);

module.exports = router;
