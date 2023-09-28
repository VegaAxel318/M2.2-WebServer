const express = require("express");
const router = express.Router();
const donadoresController =
    require("../controladores/donadoresController");
//CHANGE
router.get("/",donadoresController.getAll);
router.get("/:rfc",donadoresController.getByRFC);
router.post("/",donadoresController.add);
router.get("/:donorId/proyectos",donadoresController.getAllProyects)

module.exports = router;