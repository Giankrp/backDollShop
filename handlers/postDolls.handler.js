const Dolls = require("../db/dolls.db.js");

const createDollHandler = async (req, res) => {
  try {
    const { name, price, imageUrl } = req.body; // Obtén los datos del cuerpo de la solicitud
    const newDoll = await Dolls.create({ name, price, imageUrl });

    return res.status(201).json(newDoll); // Responde con el nuevo muñeco creado
  } catch (error) {
    console.error("Error al crear el muñeco:", error);
    return res
      .status(500)
      .json({ message: "Hubo un error al crear el muñeco" });
  }
};

module.exports = { createDollHandler };
