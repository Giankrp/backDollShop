const { check, validationResult } = require("express-validator");
const Dolls = require("../db/dolls.db.js");

const validateInput = [
  // Validación del ID (debe ser un UUID válido)
  check("id")
    .optional({ nullable: true })
    .isUUID()
    .withMessage("ID de muñeca no válido"),

  // Validación del nombre (debe ser una cadena no vacía si se proporciona)
  check("name")
    .optional({ nullable: true })
    .isString()
    .notEmpty()
    .withMessage("Nombre no valido"),

  // Validación del precio (debe ser un número entero si se proporciona)
  check("price")
    .optional({ nullable: true })
    .isInt()
    .withMessage("Precio debe ser un número entero"),

  // Validación de la URL de la imagen (debe ser una URL válida si se proporciona)
  check("imageUrl")
    .optional({ nullable: true })
    .isURL()
    .withMessage("La URL de la imagen no es válida"),
];

const updateDollsInfo = async (req, res) => {
  const { id } = req.params;
  const { name, price, imageUrl } = req.body;

  // Manejo de errores de validación
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const doll = await Dolls.findByPk(id);

    if (!doll) {
      return res.status(404).json({ error: "Muñeca no encontrada" });
    }

    // Actualizamos los datos de la muñeca si se proporcionan en la solicitud
    if (name !== undefined) {
      doll.name = name;
    }
    if (price !== undefined) {
      doll.price = price;
    }
    if (imageUrl !== undefined) {
      doll.imageUrl = imageUrl;
    }

    await doll.save();

    return res
      .status(200)
      .json({ message: "Muñeca actualizada con éxito", doll });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { updateDollsInfo };
