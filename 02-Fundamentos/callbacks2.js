let empleados = [{ id: 1, nombre: 'Ernesto' }, { id: 2, nombre: 'Gerardo' }, { id: 3, nombre: 'Felix' }];
let salarios = [{ id: 1, salario: 1000 }, { id: 2, salario: 2000 }]

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        callback(`No existe un empleado con id ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        callback(`No existe salario para empleado ${empleado.nombre}`);
    } else {
        callback(null, { nombre: empleado.nombre, salario: salarioDB.salario });
    }
}


getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    } else {
        getSalario(empleado, (err, rst) => {
            if (err) {
                return console.log(err);
            }
            return console.log(`El salario de ${rst.nombre} es ${rst.salario}`);

        });
    }

});