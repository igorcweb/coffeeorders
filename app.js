
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Order = require('./models/order');


// Connect to Mongoose
mongoose.connect('mongodb://localhost/coffeeorders');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/orders');
});

app.get('/javascripts/main.js', (req, res) => {
	res.render('javascripts/main.js');
});

app.get('/api/orders', (req, res) => {
	Order.getOrders((err, orders) => {
		if(err){
			throw err;
		}
		res.json(orders);
	});
});

app.post('/api/orders', (req, res) => {
	var order = req.body;
	Order.addOrder(order, (err, order) => {
		if(err){
            throw err;
		}
		res.json(order);
	});
});

app.put('/api/orders/:_id', (req, res) => {
	var id = req.params._id;
	var order = req.body;
	Order.updateOrder(id, genre, {}, (err, order) => {
		if(err){
			throw err;
		}
		res.json(order);
	});
});

app.delete('/api/orders/:_id', (req, res) => {
	var id = req.params._id;
	Order.removeOrder(id, (err, order) => {
		if(err){
			throw err;
		}
		res.json(order);
	});
});

app.listen(3000, function() {
    console.log('Running on Port 3000...');
});

