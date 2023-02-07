const express = require("express");
const cors = require("cors");
const { Client } = require("@googlemaps/google-maps-services-js");
const selectRoute = require("./routes/select");
const versusRoute = require("./routes/versus");
const resultsRoute = require("./routes/results");
const detailsRoute = require("./routes/details");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5050;
const API_KEY = process.env.API_KEY;

app.use(cors());

app.use(express.static("public"));

app.use("/select", selectRoute);

app.use("/versus", versusRoute);

app.use("/results", resultsRoute);

app.use("/details", detailsRoute);

const client = new Client({});

// client
//     .textSearch({
//         params: {
//             query: "pizza in toronto",
// 			radius: 5000,
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
	console.log(
		`Server is listening on port ${PORT}` ||
			`Server is listening on port 5050`
	);
});
