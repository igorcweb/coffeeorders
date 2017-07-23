const mongoose = require('mongoose');

// Order Schema
const orderSchema = mongoose.Schema({
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
module.exports.getOrders = (callback, limit) => {
	Order.find(callback).limit(limit);
}

// Add Order
module.exports.addOrder = (order, callback) => {
	Order.create(order, callback);
}

// Update Order
module.exports.updateOrder = (id, order, options, callback) => {
	var query = {_id: id};
	var update = {
		name: order.name
	}
	Order.findOneAndUpdate(query, update, options, callback);
}


// Delete Order
module.exports.removeOrder = (id, callback) => {
	var query = {_id: id};
	Order.remove(query, callback);
}