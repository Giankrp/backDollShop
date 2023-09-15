const express = require("express");
const { updateDollsInfo } = require("../handlers/updateDollsInfo.handler.js");
const updateRoute = express();

updateRoute.put("/dolls/:id", updateDollsInfo);

module.exports = { updateRoute };
