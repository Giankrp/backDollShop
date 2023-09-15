const Dolls = require("../db/dolls.db.js");

const getDollByNameController = async (name) => {
  const dollFound = await Dolls.findAll({
    where: {
      name: name,
    },
  });

  return dollFound;
};

module.exports = { getDollByNameController };
