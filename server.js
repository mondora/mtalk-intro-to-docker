require("http")
	.createServer()
	.on("request", function (req, res) {
		res.end("Hello " + process.env.GREETING_TARGET + "!");
	})
	.listen(8080);
