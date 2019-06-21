let struct = {
    nombre: 'Ernesto',
    apellido: 'Liberio',
    getFullName: function() {
        return `${this.nombre} ${this.apellido}`
    }
};

let { nombre: primerNombre, apellido } = struct;

console.log(struct, primerNombre, apellido);