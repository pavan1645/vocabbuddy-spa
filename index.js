const express = require("express");
const compression = require("compression");
const app = express();

const PORT = 4200;

app.use(compression());
app.use(express.static(__dirname + "/browser"))

app.get("*", (req, res) => {
	res.sendFile(__dirname + "/browser/index.html")
})

app.listen(PORT, () => console.log('Running on PORT', PORT))