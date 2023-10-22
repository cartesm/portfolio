import React from 'react'
import { SiGithub } from 'react-icons/si'
function Proyects() {
    return (
        <section id='proyects' className='mx-2 md:mx-0 flex flex-col items-center justify-center gap-5 pb-32'>
            <div className='flex items-center flex-col gap-5 pb-5'>
                <h3 className='text-center text-3xl font-bold text-fuchsia-600'>
                    Proyectos
                </h3>
                <p className='mb-3 text-lg max-w-[600px]'>
                    Proyectos mas interesantes desarrollados por iniciativa propia, que reflejan mis intereses y habilidades.
                </p>
            </div>
            <div className='max-w-xl w-full flex flex-col gap-5'>
                <div className='bg-gray-800 py-1 px-3 rounded-lg flex items-center gap-5'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png' alt='x' className='w-[100px] h-[100px] bg-white gap-5 rounded-full' />
                    <p>
                        <span className='text-xl text-indigo-500 font-semibold'>
                            Pokedex simple
                        </span>
                        <p className='pb-2 '>
                            Una aplicación web que muestra información sobre todos los Pokémon, desarrollada con el stack MERN y la PokeAPI.
                        </p>
                        <div className='flex items-center gap-3 justify-start'>
                            <a href='https://github.com/cartesm/PokedexV2_backend' target='_blank'>
                                <SiGithub />
                            </a>
                            <a href='https://github.com/cartesm/PokedexV2_front' target='_blank'>
                                <SiGithub />
                            </a>
                        </div>
                    </p>
                </div>
                <div className='bg-gray-800 py-1 px-3 rounded-lg flex items-center gap-5'>
                    <img src='http://imgfz.com/i/ponDaIJ.jpeg' alt='x' className='w-[100px] h-[100px] bg-white gap-5 rounded-full' />
                    <p>
                        <span className='text-xl text-indigo-500 font-semibold'>
                            Greenly
                        </span>
                        <p className='pb-2 '>
                            Aplicación web para concurso, con el fin promover el reciclaje en la comunidad, desarrollada con el stack MERN y TypeScript.
                        </p>
                        <div className='flex items-center gap-3 justify-start'>
                            <a href='https://github.com/cartesm/tp21ProyectBacktend' target='_blank'>
                                <SiGithub />
                            </a>
                            <a href='https://github.com/cartesm/tp21ProyectFrontend' target='_blank'>
                                <SiGithub />
                            </a>
                        </div>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Proyects