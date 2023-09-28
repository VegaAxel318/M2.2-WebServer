const proyectos = require("../modelos/proyectos");

const donatarios = [
    { 
        rfc: 1, 
        nombre: "MrProyectote", 
        proyectoAsociado: "PR-100", 
        imagen: "",
    },
    { 
        rfc: 2, 
        nombre: "MrProyectito", 
        proyectoAsociado: "PR-523", 
        imagen: "", 
    },
  ];

  const findAll = function(){
    return donatarios;
}
  
const findByRFC = function(rfc){
    let p = donatarios.find(e => e.rfc == rfc);
    return p;
}

const findProyecto = function(donId){
    const proyecto = proyectos.findAll().filter((d) => d.donatario.includes(donId));
    return proyecto;
}
const add = async function(newDonatario){
    // Creacion de RFC automática
    const uniqueRFC = Math.max(...donatarios.map(donatario => donatario.rfc), 0) + 1;

    const newDonatarioWithRFC = {
        rfc: uniqueRFC,
        ...newDonatario,
    };
    donatarios.push(newDonatarioWithRFC);

    return newDonatarioWithRFC;
};

exports.findAll = findAll;
exports.findByRFC = findByRFC;
exports.findProyecto = findProyecto;
exports.add = add;

//   module.exports = proyectos;