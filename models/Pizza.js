const { Schema, model } = require('mongoose');

// create the schema
const PizzaSchema = new Schema({
	pizzaName: {
		type: String,
	},
	createdBy: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	size: {
		type: String,
		default: 'Large',
	},
	toppings: [],
});

// create the model
const Pizza = model('Pizza', PizzaSchema);

module.exports = Pizza;
