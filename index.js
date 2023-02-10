const express = require("express");
const cors = require("cors");
const selectRoute = require("./routes/select");
const versusRoute = require("./routes/versus");
const resultsRoute = require("./routes/results");
const detailsRoute = require("./routes/details");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());

app.use(express.static("public"));

app.use("/select", selectRoute);

app.use("/versus", versusRoute);

app.use("/results", resultsRoute);

app.use("/details", detailsRoute);

app.listen(PORT, () => {
	console.log(
		`Server is listening on port ${PORT}` ||
			`Server is listening on port 5050`
	);
});
