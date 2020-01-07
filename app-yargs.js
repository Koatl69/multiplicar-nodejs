//require de yargs con ejemplo complicado, mas parametros, command.
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b' //para hacerlo obligatorio
        },
        //añadimos todas las demás variables
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help() //agregando este comando y escribiendo node app-yargs listar --help aparecen las variables y su tipo.
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

//let base = '3';
//para solicitar la base por el cmd hacemos lo siguiente:
// el archivo debe ser ejecutado como: node app --base=5
//pasar la variable base desde cmd

//console.log(process.argv);
let argvInicial = process.argv;

console.log('\nARREGLOS de parametros sin yargs \n', argvInicial, '\n');
console.log('ARREGLOS de parametros con yargs \n', argv); // este es el de yargs

//y para finalmente obtener ese numero de base, lo tomamos de argv,base
// recordar que el comando debe ser: node app-yargs listar -b 4 (ó -base 4 ó -b=4)

console.log('\nNumero introducido por cmd para la base: ', argv.base);



/*
crearArchivo(base)
    .then((archivo) => {
        console.log(`Archivo creado: ${archivo}`);
    }).catch((err) => {
        console.log(err);
    });
*/