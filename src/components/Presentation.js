import React from 'react'

function Presentation() {
    return (
        <section className='p-10 flex items-center justify-evenly gap-3 h-screen flex-col'>
            <div className='h-full flex items-center flex-col justify-center'>
                <h4 className='text-7xl font-bold py-3'>
                    Sebastian Cartes
                </h4>
                <span className='text-indigo-500 text-2xl font-semibold'>
                    Desarrollador web fullstack
                </span>
            </div>
            <span className='text-sky-500 bounce font-bold'>Desliza</span>
        </section>
    )
}

export default Presentation