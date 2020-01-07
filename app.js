//require de yargs, pero con este require se tendria que usar la variable argv.argv
//const argv = require('./config/yargs')
//para no hacer argv.argv se coloca el require de la siguiente manera:

const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {

    case 'listar':

        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then((archivo) => {
                console.log(`Archivo creado: ${archivo}`);
            }).catch((err) => {
                console.log(err);
            });

        break;

    default:
        console.log('Comando no reconocido');
}


console.log(argv);