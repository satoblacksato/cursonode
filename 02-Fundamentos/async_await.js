let empleados = [{ id: 1, nombre: 'Ernesto' }, { id: 2, nombre: 'Gerardo' }, { id: 3, nombre: 'Felix' }];
let salarios = [{ id: 1, salario: 1000 }, { id: 2, salario: 2000 }]

let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        throw new Error(`No existe un empleado con id ${id}`);
    } else {
        return empleadoDB;
    }
}

let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        throw new Error(`No existe salario para el usuario ${empleado.nombre}`);
    } else {
        return { nombre: empleado.nombre, salario: salarioDB.salario };
    }
}


let getInfomacion = async(id) => {
    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado);
    return `El salario de ${salario.nombre} es ${salario.salario}`;
}

getInfomacion(3)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));