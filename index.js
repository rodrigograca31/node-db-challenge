const express = require("express");

const projectsRouter = require("./projects/router.js");
const resourcesRouter = require("./resources/router.js");
const tasksRouter = require("./tasks/router.js");

const server = express();

server.use(express.json());

server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", tasksRouter);

server.use("/api/test", (req, res) => {
	console.log("hey works!");
	res.json({ message: "works" });
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log("running on " + port));
