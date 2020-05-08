const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');


const argv = require('yargs').options({

    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true

    }
}).argv;

/*lugar.getLugarLatLng(argv.direccion)
    .then(console.log);*/

/*
clima.getClima(55.5, 37.5)
    .then(console.log)
    .catch(console.log); */
//
//console.log(argv.direccion)

const geInfo = async(direccion) => {
    try {
        const resp = await lugar.getLugarLatLng(direccion);
        // console.log(resp);
        const temp = await clima.getClima(resp.lat, resp.lng);
        // console.log(temp);
        return `El clima de ${argv.direccion} es de ${temp}`


    } catch (error) {
        return `No se puede saber el clima`;
    }



}
geInfo(argv.direccion)
    .then(console.log);