const { argv } = require('./config/yargs')
const porHacer = require('./to-do/to-do')
const colors = require('colors')

let comando = argv._[0]

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado()

        for (let tarea of listado) {
            console.log('==============POR HACER==============='.green)
            console.log('Tarea: ', tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('======================================'.green)
        }

        break;
    case 'actualizar':
        console.log('Actualizar tareas');
        porHacer.actualizar(argv.descripcion, argv.completado)
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion)
        console.log(borrado);
        break;
    default:
        console.log('Ingresar un comando valido');
        break;
}