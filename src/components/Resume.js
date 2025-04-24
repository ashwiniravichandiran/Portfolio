import resume from '../assets/good_enough.jpg';

export default function Resume() {
    // Link to the resume PDF stored in public folder
    const config = {
        link: '/Simple_Resume.pdf'
    };

    return (
        <section className="flex flex-col md:flex-row px-5 items-center" id='resume'>
            <div className="font-nav-font italic text-center w-full">
                <div className="w-[1px] h-16 bg-gray-400 mx-auto"></div>

                <h1 className="py-20 font-extrabold text-2xl">RESUME</h1>

                <div className="flex flex-col md:flex-row items-center justify-center md:w-3/4 mx-auto gap-8">

                    {/* Resume Image Preview */}
                    <div className="w-[800px] h-[300px] flex-shrink-0">
                        <img
                            className="w-full h-full object-cover rounded-lg shadow-md"
                            src={resume}
                            alt="Resume"
                        />
                    </div>

                    {/* Download Text and Button */}
                    <div className="md:w-1/2 flex flex-col justify-center text-left">
                        <p className="text-lg">
                            You can view and download my Resume <br />
                            <a
                                href={config.link}
                                download
                                className="btn text-white bg-blue-600 px-4 py-2 mt-4 rounded hover:bg-blue-700 transition duration-300"
                            >
                                Download Resume
                            </a>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
