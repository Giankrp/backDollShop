const express = require("express");
const { createDollHandler } = require("../handlers/postDolls.handler.js");

const postDollRouter = express();

postDollRouter.post("/dolls", createDollHandler);

module.exports = { postDollRouter };
