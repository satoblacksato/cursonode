const fs = require('fs');
const colors = require('colors');

let craerArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es numero`);
            return;
        }

        let data = '';
        for (let idx = 1; idx <= limite; idx++) {
            data += `${base} * ${idx} = ${idx*base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else
                resolve(`tabla-${base}.txt`);
        });
    });
}


let listarTabla = (base, limite = 10) => {
    console.log('========================'.green);
    console.log(`===  Tabla de ${base} al ${limite} ===`.green);
    console.log('========================'.green);
    for (let idx = 1; idx <= limite; idx++) {
        console.log(`${base} * ${idx} = ${idx*base}`);
    }
}

module.exports = {
    craerArchivo,
    listarTabla
}