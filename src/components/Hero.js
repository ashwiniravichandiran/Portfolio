import front from '../assets/front.jpg';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineCode } from "react-icons/ai";

export default function Hero(){
    return <section className='text-center text-stone-300 bg-primary' >
        <div className='relative w-11/12 mx-auto border-x-0 text-stone-300 overflow-hidden'>
        <img src={front} className="w-full h-[750px] object-cover"/>
        <div className="w-1/2 flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl shadow-lg font-hero-font italic">
            <h1>Hi, I'm Ashwini Ravichandiran</h1>
            <p>React Developer | ML & Data Science Enthusiast</p>
            <div className='flex py-5 justify-center '>
                <a href='https://github.com/ashwiniravichandiran' className='pr-5'><AiOutlineGithub size={40} className="hover:text-violet-500 transition duration-300" /></a>
                <a href="https://www.linkedin.com/in/ashwini-ravichandiran-b9a206263/" className='pr-5'><AiOutlineLinkedin size={40} className="hover:text-violet-500 transition duration-300"/></a>
                <a href='https://leetcode.com/progress/' className='pr-5'><AiOutlineCode size={40} className="hover:text-violet-500 transition duration-300"/></a>
            </div>
        </div>
        </div>
    </section>
}