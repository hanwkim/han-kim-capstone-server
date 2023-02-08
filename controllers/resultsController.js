const { Client } = require("@googlemaps/google-maps-services-js");
const client = new Client({});
const fs = require("node:fs");

require("dotenv").config();

const API_KEY = process.env.API_KEY;
const characterList = JSON.parse(fs.readFileSync("./data/characters.json"));

const getResults = (req, res) => {
	const winningFood = characterList[0].find(
		(character) => character.name === req.query.winner
	);

	if (req.query.city === "current") {
		client
			.textSearch({
				params: {
					query: req.query.winner,
					location: req.query.location,
					radius: 5000,
					key: API_KEY,
				},
			})
			.then((response) => {
				res.json([winningFood, response.data.results]);
			})
			.catch((error) => {
				res.status(404).send("Unable to find listings");
			});
	} else {
		client
		.textSearch({
			params: {
				query: `${req.query.winner} in ${req.query.city}`,
				radius: 5000,
				key: API_KEY,
			},
		})
		.then((response) => {
			res.json([winningFood, response.data.results]);
		})
		.catch((error) => {
			res.status(404).send("Unable to find listings");
		});
	}
};

module.exports = { getResults };
