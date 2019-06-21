let empleados = [{ id: 1, nombre: 'Ernesto' }, { id: 2, nombre: 'Gerardo' }, { id: 3, nombre: 'Felix' }];
let salarios = [{ id: 1, salario: 1000 }, { id: 2, salario: 2000 }]

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => { //una promesa tiene dos callback
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe un empleado con id ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });

}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDB) {
            reject(`No existe salario para el usuario ${empleado.nombre}`);
        } else {
            resolve({ nombre: empleado.nombre, salario: salarioDB.salario });
        }
    });
}

getEmpleado(1).then(empleado => {
    getSalario(empleado).then(salario => {
        console.log(`El salario de ${salario.nombre} es ${salario.salario}`);
    }, err => console.log(err));
}, err => console.log(err));