const { Pizza } = require('../models');

const pizzaController = {
	// get all pizzas
	getAllPizza(req, res) {
		Pizza.find({})
			.then((dbPizzaData) => res.json(dbPizzaData))
			.catch((err) => {
				console.log(err);
				res.status(400).json(err);
			});
	},

	// get one pizza by id
	getPizzaById({ params }, res) {
		Pizza.findOne({ _id: params.id })
			.then((dbPizzaData) => {
				// if no pizza found, send 404
				if (!dbPizzaData) {
					res.status(404).json({ message: 'No pizza found with this id!' });
					return;
				}
				res.json(dbPizzaData);
			})
			.catch((err) => {
				console.log(err);
				res.status(400).json(err);
			});
	},

	// create a pizza
	createPizza(req, res) {
		console.log('body', req.body);
		Pizza.create(req.body)
			.then((dbPizzaData) => res.json(dbPizzaData))
			.catch((err) => res.status(400).json(err));
	},

	// update pizza by id
	updatePizza({ params, body }, res) {
		Pizza.findOneAndUpdate({ _id: params.id }, body, { new: true })
			.then((dbPizzaData) => {
				// if no pizza found, send 404
				if (!dbPizzaData) {
					res.status(404).json({ message: 'No pizza found with this id!' });
					return;
				}
				res.json(dbPizzaData);
			})
			.catch((err) => {
				res.status(400).json(err);
			});
	},

	// delete pizza
	deletePizza({ params }, res) {
		Pizza.findOneAndDelete({ _id: params.id })
			.then((dbPizzaData) => {
				// if no pizza found, send 404
				if (!dbPizzaData) {
					res.status(404).json({ message: 'No pizza found with this id!' });
					return;
				}
				res.json(dbPizzaData);
			})
			.catch((err) => {
				res.status(400).json(err);
			});
	},
};

module.exports = pizzaController;
