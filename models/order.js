var mongoose = require('mongoose');

// Order Schema
var orderSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	drink:{
		type: String,
		required: true
	}
});

const Order = module.exports = mongoose.model('Order', orderSchema);

// Get Orders
module.exports.getOrders = function(callback, limit) {
	Order.find(callback).limit(limit);
}

// Add Order
module.exports.addOrder = function(order, callback) {
	Order.create(order, callback);
}

// Update Order
module.exports.updateOrder = function(id, order, options, callback) {
	var query = {_id: id};
	var update = {
		name: order.name
	}
	Order.findOneAndUpdate(query, update, options, callback);
}


// Delete Order
module.exports.removeOrder = function(id, callback) {
	var query = {_id: id};
	Order.remove(query, callback);
}