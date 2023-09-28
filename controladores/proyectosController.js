const proyectos = require("../modelos/proyectos");

const getAll = async function (req,res) {
    let p = proyectos.findAll();
    await res.json(p);
}

const getByID = async function(req, res){
    await res.json(proyectos.getByID(req.params.sku));
}

const getAllDonors = async function (req, res){
    await res.json(proyectos.findAllDonors(req.params.proyectoId));
}

const getDonatario = async function (req, res){
    await res.json(proyectos.findDonatario(req.params.proyectoId));
}

const add = async function(req, res){
    try{
        const newProyecto = await proyectos.add(req.body);
        res.status(201).json(newProyecto);
    }
    catch (error){
        res.status(500).json({ error: "Error al agregar." });
    }
}
exports.getAll = getAll;
exports.getByID = getByID;
exports.getAllDonors = getAllDonors;
exports.getDonatario = getDonatario;
exports.add = add;