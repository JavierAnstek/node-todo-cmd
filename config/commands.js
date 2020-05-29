const descripcion = { demand: true, alias: 'D', desc: "Descripción de la tarea por hacer" };
const completado = { alias: 'C', default: true, desc: "Estado de la tarea, Completado/Pendiente" };

const argv = require('yargs')
    .command('crear', "Crea una nueva tarea", descripcion)
    .command('actualizar', "Actualiza una tarea una nueva tarea", { descripcion, completado })
    .command('listar', "Lista las tareas")
    .command('borrar', "Elimina una tarea", descripcion)
    .help()
    .argv;

module.exports = { argv }