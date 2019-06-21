const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;



const getInfo = async(direccion) => {
    try {
        const coordenada = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenada.lat, coordenada.lng)
        return `El clima de ${direccion} es ${temperatura}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion).then(console.log).catch(console.log);