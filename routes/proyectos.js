const express = require("express");
const router = express.Router();
const proyectosController =
    require("../controladores/proyectosController");
//CHANGE
router.get("/",proyectosController.getAll);
router.get("/:ID",proyectosController.getByID);
router.post("/",proyectosController.add)
router.get("/:proyectoId/donadores",proyectosController.getAllDonors)
router.get("/:proyectoId/donatario",proyectosController.getDonatario)

module.exports = router;