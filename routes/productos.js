const express = require("express");
const router = express.Router();
const productosController =
    require("../controladores/productosController");
router.get("/",productosController.getAll);
router.get("/:sku",productosController.getBySKU);
router.post("/",productosController.add);

module.exports = router;