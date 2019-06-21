const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente una tarea'
}


const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', { descripcion })
    .command('borrar', 'Borra un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
    .help()
    .argv;

module.exports = {
    argv
}