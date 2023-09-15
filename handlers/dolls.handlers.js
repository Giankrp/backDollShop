const { dollsController } = require("../controllers/dolls.controller");

const dollsHandler = async (req, res) => {
  try {
    const response = await dollsController();

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ Error: error });
  }
};

module.exports = { dollsHandler };
