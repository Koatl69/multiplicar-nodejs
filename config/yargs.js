//require de yargs con ejemplo complicado, mas parametros, command.
let config = {

    base: {
        demand: true,
        alias: 'b' //para hacerlo obligatorio
    },
    //añadimos todas las demás variables
    limite: {
        alias: 'l',
        default: 10
    }

}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', config)
    //recordar colocar los comandos base y limite para cada comando, (listar, crear, borrar, etc)
    .command('crear', 'crea la tabla de multiplicar', {
        // este parametro que es un objeto se puede reemplazar por un objeto declarado anteriormente
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

module.exports = {
    argv
}