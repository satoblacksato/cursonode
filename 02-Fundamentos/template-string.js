let nombre = 'Ernesto';
let apellidos = 'Liberio';

let nombreTemplate = `${nombre} ${apellidos}`;
let nombreCompleto = nombre + ' ' + apellidos;
console.log(nombreCompleto === nombreTemplate);

function getNombre() {
    return `${nombre} ${apellidos}`;
}

console.log(`El nombre es: ${getNombre()}`);