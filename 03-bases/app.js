const argv = require('./config/yargs').argv
const colors = require('colors');


const { craerArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        craerArchivo(argv.base, argv.limite)
            .then(mensaje => console.log(`archivo creado ${mensaje.green}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}