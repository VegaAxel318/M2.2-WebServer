const donadores = require("../modelos/donadores");

const getAll = async function (req, res){
    let p = donadores.findAll();
    await res.json(p);
}

const getByRFC = async function (req, res){
    await res.json(donadores.findByRFC(req.params.sku));
}

const getAllProyects = async function (req, res){
    await res.json(donadores.findAllProyects(req.params.donorId))
}

const add = async function (req, res){
    try{
        const newDonador = await donadores.add(req.body);
        res.status(201).json(newDonador);
    }
    catch (error){
        res.status(500).json({ error: "Error al agregar." });
    }
}
exports.getAll = getAll;
exports.getByRFC = getByRFC;
exports.add = add;
exports.getAllProyects = getAllProyects;
