const axios = require('axios');


const getClima = async(lat, lng) => {
    const rsp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=dafacc375cf76486d5a813cf496430e2&units=metric`);
    return rsp.data.main.temp;

}

module.exports = {
    getClima
}