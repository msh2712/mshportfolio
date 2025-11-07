
function About() {
    return (
        <div className='w-full bg-black pb-9 mt-10 md:mt-28 px-4 flex justify-center items-center flex-col'>
 
            <h1 className='text-center block md:hidden py-5 text-white'>
                ABOUT<span>US</span>
            </h1>

            <div className='h-auto w-full px-2 md:px-10 flex flex-col md:flex-row home'>

                <div className='aboutss w-full md:w-1/2 flex justify-center items-center'>
                    <div className='blob overflow-hidden flex items-center justify-end'>
                        <img
                            src='./msh.png'
                            alt='About Icon'
                            style={{ marginBottom: '-4px' }}
                            className='img-fluid mt-10'
                        />
                    </div>
                </div>

                <div className='aboutss w-full md:w-1/2'>
                    <div className='h-full flex justify-center flex-col'>
                        <h1 className='hidden md:block textabout font-bold text-4xl mb-5 font-name text-green-50'>
                            ABOUT <span>ME</span>
                        </h1>

                        <p className='info text-center font-about md:text-left mt-5 md:mt-0 text-base'>
                            Hi 👋, I’m <span className="text-zinc-400">Mahesh Patil</span>, a React.js Developer from Surat, Gujarat.
                            <br />
                            I have 1 Year of experience in frontend development and currently.
                            I specialize in building responsive, dynamic web applications using React.js, Redux, Tailwind CSS, and modern JavaScript (ES6+).
                            <br />
                            I enjoy turning ideas into interactive, high-performance user interfaces and constantly learning new technologies to stay ahead in the web development field.
                            <br />
                            Let’s connect and build something awesome together!
                            LinkedIn
                            <a
                                href='https://www.linkedin.com/in/mahesh-patil-ab1259233'
                                className='text-blue-600 hover:text-blue-800 underline ml-1'
                            >
                                LinkedIn
                            </a>.
                            I am always excited to do business with like-minded people.
                            <br />
                            Let's have a discussion over ☕.
                        </p>

                        <p
                            className='flex justify-center md:justify-start mt-3'
                        >
                            <button className="px-10 py-2 font-name font-medium text-white border-2 border-gray-400 rounded-lg h-12">
                                <span className="flex items-center justify-center  ">
                                   Hire Me
                                </span>

                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
