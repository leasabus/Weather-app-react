import React from 'react'

export const TopButtons = () => {
    const cities = [
        {
            id: 1,
            title: 'London'
        },
        {
            id: 2,
            title: 'Tokyo'
        },
        {
            id: 3,
            title: 'Paris'
        },
        {
            id: 4,
            title: 'Madrid'
        },
        {
            id: 5,
            title: 'Berlin'
        },
    ]
    return (
        <div className='flex items-center text-center justify-around  my-6'>
            {
                cities.map((city) => (
                    <button
                        key={city.id}
                        className="text-white font-medium text-lg bg-slate-700 hover:bg-slate-400 p-2 rounded-2xl
                         transition w-20"
                    >
                        {city.title}</button>
                ))
            }
        </div>
    )
}

