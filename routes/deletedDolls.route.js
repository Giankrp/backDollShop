const express = require("express");
const { deleteDollsHandler } = require("../handlers/deleteDolls.handler");

const deleteDollsdRouter = express();

deleteDollsdRouter.delete("/dolls", deleteDollsHandler);

module.exports = { deleteDollsdRouter };
