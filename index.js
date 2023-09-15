const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const { server } = require("./routes/index.js");
const { sq, testDbConnection } = require("./db/conexion.db.js");
const Dolls = require("./db/dolls.db.js");

dotenv.config();

const PORT = process.env.PORT || 3000;

const main = express();

main.use(morgan("dev"));

main.use(express.json());

main.get("/", (_req, res) => {
  res.send("Hola");
});

main.use("/", server);

main.use((err, _req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Hubo un error en el servidor.");
});

// Sincronización de la base de datos y inicio del servidor
sq.sync()
  .then(() => {
    console.log("Base de datos sincronizada correctamente");
    main.listen(PORT, () => {
      console.log("El servidor está escuchando en el puerto", PORT);
    });
  })
  .catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
  });
testDbConnection();
// testDb();
