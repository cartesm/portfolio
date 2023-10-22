import React from 'react'

function Header () {
    return (
        <header className='bg-opacity-10 bg-slate-700 fixed top-0 w-full flex items-center h-[50px] mb-[60px] justify-between px-6 py-3 '>
            <h1 className='mx-3 text-xl font-mono line-through'>KRTS</h1>
            <nav>
                <ul className='flex items-center gap-5'>
                    <li className='li-header'>
                        <a href='#about'>Sobre mi</a>
                    </li>
                    <li className='li-header'>
                        <a href='#skills'>
                            Skills
                        </a>
                    </li>
                    <li className='li-header'>
                        <a href='#proyects'>Proyectos</a>
                    </li>
                    <li className='li-header'>
                        <a href='#contact'>Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header