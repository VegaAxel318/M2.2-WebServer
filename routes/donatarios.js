const express = require("express");
const router = express.Router();
const donatariosController =
    require("../controladores/donatariosController");
//CHANGE
router.get("/",donatariosController.getAll);
router.get("/:rfc",donatariosController.getByRFC);
router.post("/",donatariosController.add)
router.get("/:donId/proyecto",donatariosController.getProyecto)


module.exports = router;