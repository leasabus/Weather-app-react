import React from 'react'
import { UilTemperature, UilTear, UilCloudWind, UilSun, UilSunset, UilArrowUp, UilArrowDown } from '@iconscout/react-unicons'

export const TemperatureDetails = ({ icon, description, temperature, realtemp, humidity, wind, maxtemp, mintemp, sunset }) => {
    return (
        //dejamos un div vacio porq asume q son columnas y no tenemos q especificar
        <div>
            <div className='flex justify-center items-center my-6 text-cyan-400' >
                <p className=' text-3xl'> {description}</p>
            </div>

            <div className='flex flex-row items-center justify-between py-3 text-white' >
                <img src={icon}
                    className='w-25' />
                <p className='text-5xl items-center text-center'>{temperature}ºC</p>
                <div className='flex flex-col space-y-2 '>
                    <div className='flex items-center font-light text-sm '>
                        <UilTemperature />
                        Real Feel :
                        <span className='font-medium ml-1'>{realtemp}ºC</span>
                    </div>

                    <div className='flex items-center font-light text-sm '>
                        <UilTear />
                        Humidity :
                        <span className='font-medium ml-1'>{humidity}%</span>
                    </div>

                    <div className='flex items-center font-light text-sm '>
                        <UilCloudWind />
                        Wind :
                        <span className='font-medium ml-1'>{wind} Km/h</span>
                    </div>

                </div>



            </div>
            <div className='flex flex-row justify-center items-center py-5 text-cyan-200  text-md space-x-3
             bg-slate-600 rounded-xl mt-4'>


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
