const argv = require('./config/commands').argv;
const colors = require('colors');
const todo = require('./to-do/todo');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tareaList = todo.crear(argv.descripcion);
        console.log(tareaList);
        break;

    case 'listar':
        let listToDo = todo.readList();
        console.log('============ Por Hacer ============'.yellow);
        for (let todo of listToDo) {
            console.log('> ', todo.descripcion);
            if (todo.completado)
                console.log('ESTADO:'.blue, colors.green('COMPLETADO'));
            else
                console.log('ESTADO:'.blue, colors.red('PENDIENTE'));
        }
        console.log('==================================='.yellow);
        break;

    case 'actualizar':
        let upd = todo.update(argv.descripcion, argv.completado);
        console.log(upd);
        break;

    case 'borrar':
        let del = todo.del(argv.descripcion);
        console.log(del);
        break;

    default:
        console.log('Comando incorrecto');
        break;
}