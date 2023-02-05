const express = require('express');
const cors = require('cors');
const {Client} = require("@googlemaps/google-maps-services-js");

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5050;
const API_KEY = process.env.API_KEY;

app.use(cors());

const client = new Client({});

// client
//     .textSearch({
//         params: {
//             query: "pizza in toronto",
//             key: API_KEY
//         }
//     })
//     .then((response) => {
//         console.log(response.data.results);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}` || `Server is listening on port 5050`);
})