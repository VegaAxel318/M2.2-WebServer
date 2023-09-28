const proyectos = require("../modelos/proyectos");

const donadores = [
    { 
        rfc: 1, 
        nombre: "Fanatico", 
        proyectosAsociados: ["PR-100","PR-523"], 
        imagen: "",
        cantidadDonada: 0, 
    },
    { 
        rfc: 2, 
        nombre: "Seguidor", 
        proyectosAsociados: ["PR-523"],
        imagen: "", 
        cantidadDonada: 0, 
    },
];

const findAll = function(){
    return donadores;
}
const findByRFC = function (rfc){
    let p = donadores.find((e) => e.rfc == rfc);
    return p;
}

const findAllProyects = function (donorId){
    const proyectosAsociados =  proyectos.findAll().filter((p) => p.donadores.includes(donorId));
    return proyectosAsociados;
}

const add = async function (newDonador){
    // Creacion de RFC automatica (siguiente RFC mas grande)
    const uniqueRFC = Math.max(...donadores.map((donador) => donador.rfc)) + 1;

    const donador = {
        rfc: uniqueRFC,
        ...newDonador,
    };
    donadores.push(donador);

    return donador;
};

exports.findAll = findAll;
exports.findByRFC = findByRFC;
exports.add = add;
exports.findAllProyects = findAllProyects;