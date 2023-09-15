const {
  getDollByNameController,
} = require("../controllers/getDollByName.controller.js");

const getDollByNameHandler = async (req, res) => {
  const { name } = req.params;

  try {
    const dollsFounded = await getDollByNameController(name);

    return res.status(200).json(dollsFounded);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "doll not found" });
  }
};

module.exports = { getDollByNameHandler };
