'use client'

import { useState } from 'react';
import LanguageChanger from './LanguageChanger';
import NavLinks from './NavLink';
import MenuButton from './MenuButton';

export default function Navbar() {

    const [open, setOpen] = useState(false)
    const [rotate, setRotate] = useState(false)


    return (

        <ul className="flex flex-row flex-wrap mt-8 space-x-4 font-bold text-2xl md:text-3xl justify-center md:justify-end md:pr-10 [&_li:hover]:text-primary text-secondary animate-fadeDown transition ease-out">
            <li className='absolute left-8'><LanguageChanger /></li>
            <div className='hidden sm:flex sm:space-x-4'>
                <NavLinks />
            </div>
            <button onClick={() => {setOpen(!open); setRotate(!rotate)}} className={`${rotate && "rotate-90"} transition-transform ease-out sm:hidden absolute right-8`}><MenuButton/></button>
            {open && (
                <div className='flex flex-col basis-full mt-12 items-center animate-fadeDown sm:hidden'>
                    <NavLinks />
                </div>

            )}
        </ul>
    );
}