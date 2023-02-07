const express = require("express");
const router = express.Router();
const { Client } = require("@googlemaps/google-maps-services-js");
const resultsController = require("../controllers/resultsController");

const client = new Client({});

const API_KEY = process.env.API_KEY;

router
    .route("/")
    .get(resultsController.getResults);


module.exports = router;