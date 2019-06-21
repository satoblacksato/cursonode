/*function sumar(a, b) {
    return a + b;
}*/

//let sumar = (a, b) => a + b;

//console.log(sumar(6, 6));

//function saludar() {
//    return 'Hola Mundo';
//}

//let saludar = () => 'Hola Mundo';
//console.log(saludar());

//let saludar = (nombre) => `Hola ${nombre}`;
//console.log(saludar('Ernesto Gerardo'));


let struct = {
    nombre: 'Ernesto',
    apellido: 'Liberio',
    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }
};

console.log(struct.getFullName());