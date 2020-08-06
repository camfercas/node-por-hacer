const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza un tarea a completada', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .command('listar', 'Lista las tarea', {
        completado: {
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea',
            type: 'boolean'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
};