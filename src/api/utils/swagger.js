const { express, request, response } = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const { version } = require("../package.json");

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "REST API Docs",
			version: "1.0.0",
		},
	},
    apis: ["../routes/*.js", "../models/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);
const swaggerDocs = (app, port) => {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.get("docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    })
};


module.exports = {swaggerDocs};



