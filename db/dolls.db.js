
const { DataTypes } = require("sequelize");
const { sq } = require("../db/conexion.db");

const Dolls = sq.define("doll", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  imageUrl: { // Campo para la URL de la imagen
    type: DataTypes.STRING, // Puedes usar DataTypes.TEXT si las URL de las imágenes pueden ser largas
    allowNull: true, // Puedes permitir que sea nulo si deseas
  },
});

module.exports = Dolls;

