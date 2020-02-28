const express = require('express');

const Burger = require('../models/burger');

const router = express.Router();

router.get('/burgers', async (_, res) => {
	const data = await Burger.findAll();

	res.json(data);
});

router.post('/burger/new', async (req, res) => {
	const { name } = req.body;

	await Burger.create({
		burger_name: name,
		isDevoured: false
	});

	res.status(200).end();
});

router.put('/burger/:id/devour', async (req, res) => {
	const { id } = req.params;

	await Burger.update({
		isDevoured: true
	}, {
		where: {
			id
		}
	});

	res.status(200).end();
});

module.exports = router;