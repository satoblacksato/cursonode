const axios = require('axios');


const getLugarLatLng = async(direccion) => {
    const encodeURL = encodeURI(direccion);


    const instancia = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: {
            'X-RapidAPI-Key': 'fa3db0b310msh46d79c5c6d0c1abp1fba8djsn61bd91c26be0'
        }
    });

    const resp = await instancia.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultado para ${direccion}`);
    }

    const data = resp.data.Results[0];
    return {
        direccion: data.name,
        lat: data.lat,
        lng: data.lon
    }
}

module.exports = {
    getLugarLatLng
}