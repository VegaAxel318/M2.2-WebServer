const cors = require("cors");
const express = require("express");
const productosRouter = require("./routes/productos");
const proyectosRouter = require("./routes/proyectos");
const donadoresRouter = require("./routes/donadores");
const donatariosRouter = require("./routes/donatarios");
const fs = require("fs");
const https = require("https");

process.env.port = 4001;
const app = express();
app.use(cors());
app.use(express.json());

app.use ("/productos",productosRouter);
app.use ("/proyectos",proyectosRouter);
app.use ("/donadores",donadoresRouter);
app.use ("/donatarios",donatariosRouter);

const llavePrivada = fs.readFileSync("private.key");
const certificado = fs.readFileSync("certificate.crt");
const credenciales = {
    key: llavePrivada,
    cert: certificado,
    passphrase: "desarrolloweb"
};

const httpsServer = https.createServer(credenciales,app);


httpsServer.listen(process.env.port, () => {
    console.log("Server https en puerto 4001");
}).on('error',err => {
    console.log('Error al iniciar el servidor:',err);
});


//Primera version, s    in usar router
// const cors = require("cors");
// const express = require("express");
// const productosController = require("./controladores/productosController");
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.get("/productos",productosController.getAll);
// app.get("/productos/:sku",productosController.getBySKU);

// app.listen(3000, () => {
//     console.log("Server en puerto 3000");
// });
