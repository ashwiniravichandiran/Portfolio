// import resume from '../assets/good_enough.jpg';
// export default function Resume(){
//     return <section className='flex flex-col md:flex-row px-5'>
//         <div className="font-nav-font italic text-center">
//         <h1 className="py-16 font-extrabold text-2xl">RESUME</h1>
//         <div className='py-5 md:w-1/2 justify-center'>
//          <img className='w-[300px] h-[150px]' src = {resume}/>
//         </div>
//         <div className='md:w-1/2 flex flex-col justify-center text-left'>
//         <p> You can view my Resume <a href='#'> Download </a></p>
//         </div>
//         </div>
//     </section>
// }

import resume from '../assets/good_enough.jpg';


export default function Resume() {

        const config = {
            link: 'file:///C:/Users/Acer/Documents/Resume.pdf'
        }

    return (
        <section className="flex flex-col md:flex-row px-5 items-center" id='resume'>
            <div className="font-nav-font italic text-center w-full">
            <div className="w-[1px] h-16 bg-gray-400 mx-auto"></div>
                <h1 className="py-20 font-extrabold text-2xl">RESUME</h1>
                <div className="flex flex-col md:flex-row items-center justify-center md:w-3/4 mx-auto gap-8">
                    {/* Resume Image */}
                    <div className="w-[800px] h-[300px] flex-shrink-0">
                        <img className="w-full h-full object-cover rounded-lg shadow-md" src={resume} alt="Resume" />
                    </div>

                    {/* Text beside Image */}
                    <div className="md:w-1/2 flex flex-col justify-center text-left">
                        <p className="text-lg">
                            You can view my Resume <br></br>
                            <a href={config.link} className="btn text-white"> Download </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
