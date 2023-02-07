const express = require("express");
const router = express.Router();
const { Client } = require("@googlemaps/google-maps-services-js");
const client = new Client({});

require("dotenv").config();

const API_KEY = process.env.API_KEY;

router.get("/", (req, res) => {
    client
        .placeDetails({
            params: {
                place_id: req.query.id,
                fields: "name,opening_hours,website,reviews",
                key: API_KEY,
            },
        })
        .then((response) => {
            res.json(response.data.result);
        })
        .catch((error) => {
            res.status(404).send("Unable to locate place details");
            console.log(error);
        })
});

module.exports = router;