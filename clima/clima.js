const axios = require('axios');

const getClima = async(lat, lng) => {

    // const encodeUrl = encodeURI(dir);



    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&appid=8141c48cd8777b258342f89546c41821&units=metric`
    });

    const resp = await instance.get();

    // console.log(resp.data.list[0].main.temp);
    /* if (resp.data.main.lenght === 0) {
         throw new Error(`No hay resultados para ${ dir }`);
     }*/

    //  const data = resp.data.main[0];
    // const temperatura = data.temp;


    return resp.data.list[0].main.temp;


}

module.exports = {
    getClima
};