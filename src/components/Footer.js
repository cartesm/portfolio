import React from 'react'
import { SiInstagram, SiLinkedin } from 'react-icons/si'

function Footer() {
    return (
        <footer id='contact' className='py-4 flex flex-col items-center justify-center gap-5 bg-gray-800'>
            <span className='text-indigo-400'>sebastiancartes.work@gmail.com</span>
            <ul className='flex items-center justify-center w-full gap-5 '>
                <li className='text-2xl'>
                    <SiInstagram />
                </li>
                <li className='text-2xl'>
                    <SiLinkedin />
                </li>
            </ul>
            <span className='text-sm'>
                Echo en 2 horas con 5 tazas de cafe a ultima hora
            </span>
        </footer>
    )
}

export default Footer