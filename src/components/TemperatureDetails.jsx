import React from 'react'
import { UilTemperature, UilTear, UilCloudWind, UilSun, UilSunset, UilArrowUp, UilArrowDown } from '@iconscout/react-unicons'

export const TemperatureDetails = ({ icon, description, temperature, realtemp, humidity, wind, maxtemp, mintemp, sunset }) => {
    return (
        //dejamos un div vacio porq asume q son columnas y no tenemos q especificar
        <div className='temp-details '>
            <div className='flex justify-center items-center my-6 text-cyan-400 ' >
                <p className=' text-3xl'> {description}</p>
            </div>

            <div className='flex flex-row items-center justify-between py-3 text-white space-y-2 div-details space-x-4' >
                <img src={icon}
                    className='w-25' />
                <p className='text-5xl items-center text-center '>{temperature}ºC</p>
                <div className='flex flex-col items-center justify-center text-center space-y-2 space-x-2'>
                    <div className='flex items-center no-wrap justify-center font-light text-sm div-descriptions'>
                        <UilTemperature size={18} className='mr-1' />
                        Real Feel :
                        <span className='font-medium ml-1'>{realtemp}ºC</span>
                    </div>

                    <div className='flex items-center justify-center font-light text-sm div-descriptions'>
                        <UilTear size={18} className='mr-1' />
                        Humidity :
                        <span className='font-medium ml-1'>{humidity}%</span>
                    </div>

                    <div className='flex items-center justify-center font-light text-sm div-descriptions'>
                        <UilCloudWind size={18} className='mr-1' />
                        Wind:
                        <span className='font-medium ml-1'>{wind}Km/h</span>
                    </div>

                </div>



            </div>
            <div className='flex flex-row justify-center items-center py-5 text-cyan-200  text-md space-x-3
             bg-slate-600 rounded-xl mt-4 high-low'>


                <UilArrowUp />
                High :
                <span className='font-medium ml-1'>{maxtemp}ºC</span>

                <span>|</span>

                <UilArrowDown />
                Low:
                <span className='font-medium ml-1'>{mintemp}ºC</span>

            </div>
        </div>
    )
}
