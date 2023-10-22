import React from 'react'

function AboutMe() {
    return (
        <section id='about' className='flex flex-col px-5 md:flex-row items-center justify-center h-screen gap-7 '>
            <div>
                <h3 className='text-sky-700 text-4xl font-bold py-3'>Sobre mi</h3>
                <p className='max-w-[500px] text-lg indent-3'>
                    Soy un estudiante de programación de 17 años de Chile. Me gusta el desarrollo web con JavaScript y mi objetivo es encontrar chamba.
                </p>
            </div>
            <div className='w-[200px] h-[200px] border-2 gap-5 rounded-full overflow-hidden flex items-center justify-center'>
                <img alt='No coloco mi foto porque no es mi intencion enamorarlos' src='http://imgfz.com/i/tnuNsFK.jpeg' className='w-[180%] h-[180%] object-cover' />

            </div>

        </section>
    )
}

export default AboutMe