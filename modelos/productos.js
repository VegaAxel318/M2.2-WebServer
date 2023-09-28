const productos = [
    {
        sku: 1,
        descripcion: "gansito"
    },
    {
        sku: 2,
        descripcion: "zanahorias"
    }
]
const findAll = function(){
    return productos;
}

const findBySKU = function(sku){
    let p = productos.find(e => e.sku== sku);
    return p;
}

exports.findAll = findAll;
exports.findBySKU = findBySKU;