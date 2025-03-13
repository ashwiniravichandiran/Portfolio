import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
export default function Header(){
    const[togglemenu, settogglemenu] =  useState(false);



    return <header className="fixed top-0 left-0 w-full z-50 flex justify-between px-10 py-5 bg-primary ">
        <h1 className="font-bold text-black font-nav-font italic">Ashwini R</h1>
        <nav className="hidden md:block">
        <ul className="flex text-stone-900 font-nav-font italic">
            <li><a href="/" className="relative gradient-underline">Home</a></li>
            <li><a href="#about" className="relative gradient-underline">About</a></li>
            <li><a href="#projects" className="relative gradient-underline">Projects</a></li>
            <li><a href="#achievements" className="relative gradient-underline">Achievements</a></li>
            <li><a href='#resume' className="relative gradient-underline">Resume</a></li>
            <li><a href="#contacts" className="relative gradient-underline">Contact</a></li>
        </ul>
        </nav>
        {togglemenu && <nav className="block md:hidden">
        <ul className="flex flex-col  text-stone-900 font-nav-font italic mob_nav">
        <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href='#resume'>Resume</a></li>
            <li><a href="#contacts">Contact</a></li>
        </ul>
        </nav>}
        <button onClick={() => settogglemenu(!togglemenu)}className="block md:hidden"><Bars3Icon className='text-white h-5' /></button>

    </header>
}