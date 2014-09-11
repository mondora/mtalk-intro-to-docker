require("http")
	.createServer()
	.on("request", function (req, res) {
		res.end("Hello world!");
	})
	.listen(8080, "0.0.0.0");
