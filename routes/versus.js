const express = require("express");
const router = express.Router();
const fs = require("node:fs");

const characterList = JSON.parse(fs.readFileSync("./data/characters.json"));

router.get("/", (req, res) => {
    const playerOne = characterList[0].find(character => character.name === req.query.p1);
    const playerTwo = characterList[0].find(character => character.name === req.query.p2);

    res.json([playerOne, playerTwo]);
})

module.exports = router;