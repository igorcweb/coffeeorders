
var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

Order = require('./models/order');


// Connect to Mongoose
mongoose.connect('mongodb://localhost/coffeeorders', function(err) {
	console.log(err);
});
var db = mongoose.connection;

app.get('/', function(req, res) {
	res.send('Please use /api/orders');
});

app.get('/javascripts/main.js', function(req, res) {
	res.render('javascripts/main.js');
});

app.get('/api/orders', function(req, res) {
	Order.getOrders(function(err, orders) {
		if(err){
			throw err;
		}
		res.json(orders);
	});
});

app.post('/api/orders', function(req, res) {
	var order = req.body;
	console.log(order);
	Order.addOrder(order, function(err, order) {
		if(err){
            throw err;
		}
		res.json(order);
	});
});

app.put('/api/orders/:_id', function(req, res) {
	var id = req.params._id;
	var order = req.body;
	Order.updateOrder(id, genre, {}, function(err, order) {
		if(err){
			throw err;
		}
		res.json(order);
	});
});

app.delete('/api/orders/:_id', function(req, res) {
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

