const express = require("express");
const router = express.Router();
const fs = require("node:fs");

const characterList = JSON.parse(fs.readFileSync("./data/characters.json"));

router.get("/", (req, res) => {
	res.json(characterList[0]);
});

module.exports = router;
