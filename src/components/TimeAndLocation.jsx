import React from 'react'

export const TimeAndLocation = ({ name, country }) => {

    let date = new Date().toDateString();

    return (
        <div>
            <div className='flex justify-center items-center my-6 '>
                <p className='text-white font-extralight text-xl date-p '>{date}   </p>
            </div>

            <div className='flex justify-center text-center items-center my-3'>
                <h3 className='text-white font-medium text-3xl name-country animate__animated animate__fadeInDown'>{name}{country}</h3>
            </div>
        </div>
    )
}
