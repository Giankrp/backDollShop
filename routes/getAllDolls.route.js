const express = require("express");
const { dollsHandler } = require("../handlers/dolls.handlers");
const { getDollByNameHandler } = require("../handlers/getDollByName.handler");

const allDollsRouter = express();

allDollsRouter.get("/dolls", dollsHandler);

allDollsRouter.get("/dolls/:name", getDollByNameHandler);

module.exports = { allDollsRouter };
