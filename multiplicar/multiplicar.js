//requires
const fs = require('fs'); // archivo incorporado en nodejs
// const fs = require('express');  archivos creados por otras personas
// const fs = require('./dir');  archivos que nosotros creamos

let listarTabla = (base, limite) => {

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${i*base}\n`);
    }

}



let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        // validamos que base sea un numero
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            // y paramos el programa
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${i*base}\n`;
        }

        fs.writeFile(`archivos de tablas/tabla-del-${base} al ${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-del-${base} al ${limite}.txt`);
            }

        });

    })

}

module.exports = {
    crearArchivo,
    listarTabla
}