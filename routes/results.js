const express = require("express");
const router = express.Router();
const { Client } = require("@googlemaps/google-maps-services-js");
const resultsController = require("../controllers/resultsController");

const client = new Client({});

const API_KEY = process.env.API_KEY;

router
    .route("/")
    .get(resultsController.getResults);

router
    .route("/filtered/current-location")
    .get(resultsController.getFilteredResultsCurrent);

router
    .route("/filtered/city-location")
    .get(resultsController.getFilteredResultsCity);


module.exports = router;