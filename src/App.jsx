
import { TimeAndLocation } from './components/TimeAndLocation'
import { TemperatureDetails } from './components/TemperatureDetails'
import { useEffect, useState } from 'react'
import { getWeatherData } from './api/weatherApi';
import { UilSearch } from '@iconscout/react-unicons'




export const App = (initialForm = {}) => {

  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState(initialForm = "Paris")



  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getWeatherData(city)
      setWeather(data)
    }
    fetchWeatherData();
  }, [city])



  const onHandleChange = (event) => {
    if (event.keyCode === 13) {
      setCity(event.currentTarget.value)
      event.currentTarget.blur();

    }
  }



  return (
    <>




      <div className=' w-100% h-100'>

        {

          weather && (

            <div className="mx-auto
      max-w-xl
      mt-8 py-5 px-32
      bg-gradient-to-br
      from-slate-700
      h-fit shadow-xl shadow-black
      rounded-lg opacity-95
      animate__animated animate__fadeIn
      container " >


              {/* <TopButtons  > </TopButtons> */}

              <div className='flex flex-row justify-center my-6 '>
                <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                  <div className='input-search'>
                    <input
                      name='getcity'
                      onKeyDown={onHandleChange}
                      type="text"
                      placeholder="Search for a city..."
                      className='text-md font-medium px-8 py-2 m-4 w-max shadow-xl focus:outline-none capitalize placeholder:lowercase rounded bg-slate-200 '

                    />
                  </div>
                  <button type="submit">

                    <UilSearch size={30}
                      className='text-cyan-50 cursor-pointer transition ease-out hover:scale-125'

                    ></UilSearch>
                  </button>


                </div>
              </div>

              <TimeAndLocation name={`${weather.name}, ${weather.country}`}
              />

              <TemperatureDetails
                description={weather.main}
                temperature={weather.feels_like.toFixed()}
                wind={weather.speed}
                humidity={weather.humidity}
                realtemp={weather.feels_like.toFixed()}
                maxtemp={weather.temp_max.toFixed()}
                mintemp={weather.temp_min.toFixed()}
                icon={weather.iconUrl}

              />
            </div>
          )

        }
      </div>

    </>

  )
}
export default App
