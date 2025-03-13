import contact from "../assets/contact1.jpg";
export default function Contacts(){
    return <section className="flex flex-col md:flex-row px-5 items-center" id='contacts'>
                <div className="font-nav-font italic text-center w-full">
                <div className="w-[1px] h-16 bg-gray-400 mx-auto"></div>
                    <h1 className="py-20 font-extrabold text-2xl">CONTACT</h1>
                    <div className="flex flex-col md:flex-row items-center justify-center md:w-3/4 mx-auto gap-8">

                        {/* Text beside Image */}
                        <div className="md:w-1/2 flex flex-col justify-center">
                        <p> If you want to discuss more in detail, <br></br>contact me!</p><br></br>
             <p>Email: <a href="ashwinirbtechcse@gmail.com" className="underline text-violet-700">ashwinirbtechcse@gmail.com</a></p>
  <p>LinkedIn: <a href="(25) Ashwini Ravichandiran | LinkedIn" className="underline text-violet-700">linkedin.com/in/ashwiniravi</a></p>
  <p>GitHub: <a href="https://github.com/ashwiniravichandiran" className="underline text-violet-700" >github.com/ashwiniravi</a></p>
  <p>Portfolio: <a href="https://github.com/ashwiniravichandiran/Portfolio" className="underline text-violet-700">ashwiniravichandiran.me</a></p>
  
                        </div>

                        {/* Resume Image */}
                        <div className="w-[600px] h-[300px] flex-shrink-0">
                            <img className="w-full h-full object-cover rounded-lg shadow-md" src={contact} alt="contact" />
                        </div>
                    </div>
                </div>
            </section>
    
    
}


