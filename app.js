//Archivo no utilizado, se usa Server.js
const cors = require("cors");
const express = require("express");
// const productosRouter = require("./routes/productos");
const proyectosRouter = require("./routes/proyectos");
const donadoresRouter = require("./routes/donadores");
const donatariosRouter = require("./routes/donatarios");

const app = express();
app.use(cors());
app.use(express.json());

// app.use ("/productos",productosRouter);
app.use ("/proyectos",proyectosRouter);
app.use ("/donadores",donadoresRouter);
app.use ("/donatarios",donatariosRouter);


app.listen(4000, () => {
    console.log("Server en puerto 4000");
});
