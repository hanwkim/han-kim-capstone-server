const express = require("express");
const router = express.Router();
const fs = require("node:fs");

const characterList = JSON.parse(fs.readFileSync("./data/characters.json"));

router.get("/", (req, res) => {
	if (req.query.type === "savory") {
		res.json(characterList[0]);
	} else {
		res.json(characterList[1]);
	}
	
});

module.exports = router;
