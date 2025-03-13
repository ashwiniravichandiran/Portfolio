import Entrelocate from '../assets/map1.jpg';
import Grade from '../assets/Grade.jpg';
import Email from '../assets/Email.jpg';

export default function Projects(){
    return <section id='projects'>
        <div className="font-nav-font italic text-center">
        <div className="w-[1px] h-16 bg-gray-400 mx-auto"></div>
        <h1 className="py-20 font-extrabold text-2xl">PROJECTS</h1>
        <div className="flex justify-center items-center gap-10">
        
          {[ 
            { img: Entrelocate, text: "EntreLocate 01" }, 
            { img: Grade, text: "Grade Prediction 02" }, 
            { img: Email, text: "Spam Mail Detection 03" } 
          ].map((project, index) => (
            <div key={index} className="relative w-[400px] h-[220px] group">
              <img
                src={project.img} alt='project'
                className="w-full h-full object-cover rounded-lg shadow-md transition duration-300 ease-in-out group-hover:brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="bg-gradient-to-r from-purple-400 to-emerald-400 text-transparent bg-clip-text text-lg font-bold">{project.text}</p>
              </div>

            </div>
          ))}
        </div>
        </div>
    </section>
}