const API_KEY = '4359c25de07142350aec32c7ad9848e3';
//funcion para mostrar el icono segun el clima

const makeIconUrl = (iconId) => `http://openweathermap.org/img/wn/${iconId}@2x.png`

export const getWeatherData = async (city, units = 'metric') => {
    const URL = ` https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const data = await fetch(URL)
        .then((resp => resp.json()))
        .then((data) => data);
    // console.log(data)
    //desestructuramos todo lo q necesitamos de la data  

    const { weather,
        main: { feels_like, temp_min, temp_max, humidity },
        sys: { country, sunrise, sunset },
        wind: { speed },
        name } = data;

    //como no quiero todos los datos del weather y es un array hago este filtro

    const { main, icon } = weather[0]

    return {

        main,
        weather,
        feels_like,
        temp_max,
        temp_min,
        humidity,
        country,
        speed,
        name,
        iconUrl: makeIconUrl(icon),
        sunrise,
        sunset

    }

    //falta mostrar resultados


}