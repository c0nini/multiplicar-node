
const argv = require('./config/yargs').argv;
const colors = require('colors')

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

const comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:' , `${archivo}`.green))
            .catch(err => console.log(err))
        break;

    default:
        console.log('Comando desconocido')
}



// const argv2 = process.argv;

// console.log('Limite', argv.limite);


