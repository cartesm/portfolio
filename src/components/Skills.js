import React from 'react'
import { SiCss3, SiExpress, SiGit, SiGithub, SiHtml5, SiJavascript, SiLeagueoflegends, SiMongodb, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'

function Skills() {
    return (
        <section id='skills' className='pb-32 flex flex-col gap-7 items-center justify-items-center'>
            <h3 className='text-3xl font-bold text-fuchsia-500'>
                Skills
            </h3>
            <div>
                <ul className='grid grid-cols-6 gap-2'>
                    <li className='skill-li'>
                        <SiLeagueoflegends />
                    </li>
                    <li className='skill-li'>
                        <SiJavascript />
                    </li>
                    <li className='skill-li'>
                        <SiTypescript />
                    </li>
                    <li className='skill-li'>
                        <SiHtml5 />
                    </li>
                    <li className='skill-li'>
                        <SiCss3 />
                    </li>
                    <li className='skill-li'>
                        <SiNodedotjs />
                    </li>
                    <li className='skill-li'>
                        <SiExpress />
                    </li>
                    <li className='skill-li'>
                        <SiMongodb />
                    </li>
                    <li className='skill-li'>
                        <SiReact />
                    </li>
                    <li className='skill-li'>
                        <SiTailwindcss />
                    </li>
                    <li className='skill-li'>
                        <SiGit />
                    </li>
                    <li className='skill-li'>
                        <SiGithub />
                    </li>


                </ul>
            </div>
        </section>
    )
}

export default Skills