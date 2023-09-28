const donatarios = require("../modelos/donatarios");

const getAll = async function(req, res){
    let p = donatarios.findAll();
    await res.json(p);
}

const getByRFC = async function(req, res){
    await res.json(donatarios.findByRFC(req.params.sku));
}

const getProyecto = async function(req, res){
    await res.json(donatarios.findProyecto(req.params.donId));
}

const add = async function(req, res){
    try{
        const newDonatario = await donatarios.add(req.body);
        res.status(201).json(newDonatario);
    }
    catch (error){
        res.status(500).json({ error: "Error al agregar." });
    }
}
exports.getAll = getAll;
exports.getByRFC = getByRFC;
exports.getProyecto = getProyecto;
exports.add = add;
