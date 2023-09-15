const {
  deleteDollsController,
} = require("../controllers/deleteDolls.controller.js");

const deleteDollsHandler = async (req, res) => {
  const { name } = req.body;
  try {
    const deletedDoll = await deleteDollsController(name);

    return res.status(201).json({ "Doll deleted success": deletedDoll });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ Error: error });
  }
};

module.exports = { deleteDollsHandler };
