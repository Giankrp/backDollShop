const Dolls = require("../db/dolls.db.js");
const deleteDollsController = async (name) => {
  const deletedDoll = await Dolls.destroy({
    where: {
      name: name,
    },
  });

  return deletedDoll;
};

module.exports = { deleteDollsController };
