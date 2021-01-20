//3 tipos de requireds
// const fs = require('express');
// const fs = require('fs');
const { crearArchivo } = require('./multiplicar/multiplicar');



// console.log(process.argv)
const argv = process.argv;
const parametro = argv[2]

const base = parametro.split('=')[1];
console.log(base);
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err))