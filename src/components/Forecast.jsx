import React from 'react'

export const Forecast = ({ tittle }) => {
    return (
        <div>
            <div className='flex justify-start items-center py-6'>

                <p className='text-white font-medium uppercase '>{tittle}</p>
            </div>
            <hr className='my-2' />

            <div className='flex flex-row items-center justify-center my-4 space-x-14'>

                <div className='text-white'>
                    2:00 PM
                    <img className='w-12' src="http://openweathermap.org/img/wn/01d@2x.png" />
                    <span className='flex items-center justify-center'>19º</span>

                </div>

                <div className='text-white'>
                    3:00 PM
                    <img className='w-12' src="http://openweathermap.org/img/wn/01d@2x.png" />
                    <span className='flex items-center justify-center'>16º</span>

                </div>
                <div className='text-white'>
                    4:00 PM
                    <img className='w-12' src="http://openweathermap.org/img/wn/01d@2x.png" />
                    <span className='flex items-center justify-center'>13º</span>

                </div>
                <div className='text-white'>
                    5:00 PM
                    <img className='w-12' src="http://openweathermap.org/img/wn/01d@2x.png" />
                    <span className='flex items-center justify-center'>12º</span>

                </div>

                <div className='text-white'>
                    6:00 PM
                    <img className='w-12' src="http://openweathermap.org/img/wn/01d@2x.png" />
                    <span className='flex items-center justify-center'>11º</span>

                </div>

            </div>
        </div>
    )
}
