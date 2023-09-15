const Dolls = require("../db/dolls.db.js");
const dollsController = async () => {
  const dolls = await Dolls.findAll();

  return dolls;
};
module.exports = { dollsController };
