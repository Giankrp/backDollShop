const express = require("express");
const { allDollsRouter } = require("./getAllDolls.route.js");
const { postDollRouter } = require("./postDoll.route.js");
const { deleteDollsdRouter } = require("./deletedDolls.route.js");
const { updateRoute } = require("./updateDollsInfo.route.js");
const server = express();

server.use("/", allDollsRouter);
server.use("/", postDollRouter);
server.use("/", deleteDollsdRouter);
server.use("/", updateRoute);
module.exports = { server };
