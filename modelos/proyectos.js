const donadores = require("../modelos/donadores");
const donatarios = require("../modelos/donatarios");


const proyectos = [
    { 
        id: "PR-100", 
        nombre: "Proyectote", 
        descripcion: "Super proyecto", 
        imagen: "",
        donatario: "MrProyectote",
        donadores: ["Fanatico"], 
        cantidadDonada: 0, 
    },
    { 
        id: "PR-523", 
        nombre: "Proyectito", 
        descripcion: "Mini proyecto",
        imagen: "", 
        donatario: "MrProyectito",
        donadores: ["Fanatico","Seguidor"], 
        cantidadDonada: 0, 
    },
];

const findAll = function(){
    return proyectos;
}

const findByID = function(id){
    let p = proyectos.find(e => e.id == id);
    return p;
}

const findAllDonors = function(proyectoId) {
    const donadoresAsociados = donadores.findAll().filter((d) => d.proyectosAsociados.includes(proyectoId));
    return donadoresAsociados;
}

const findDonatario = function(proyectoId) {
    const donatario = donatarios.findAll().filter((p) => p.proyectoAsociado.includes(proyectoId));
    return donatario;
}

const add = async function(newProyecto){
    // Creacion de ID automático
    const uniqueID = Math.max(...proyectos.map(proyecto => proyecto.id), 0) + 1;

    const newProyectoWithID = {
        id: uniqueID,
        ...newProyecto,
    };
    proyectos.push(newProyectoWithID);

    return newProyectoWithID;
};

exports.findAll = findAll;
exports.findByID = findByID;
exports.findAllDonors = findAllDonors;
exports.findDonatario = findDonatario;
exports.add = add;