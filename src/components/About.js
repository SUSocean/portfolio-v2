import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <section id="about" className="mb-32 mx-auto w-5/6 max-w-5xl scroll-mt-24">
            <div className='flex place-items-center gap-5 mb-20'>
                <h3 className="text-slate-200 text-2xl font-semibold sm:4xl">About Me</h3>
                <span className='w-72 h-0.5 bg-slate-600 sm:w-96'></span>
            </div>


            <div className='flex flex-col gap-7 lg:flex-row lg:justify-between'>
                <div className='mb-16 lg:w-3/6'>
                    <article className="mb-6 text-slate-400 text-xl tracking-normal leading-8 sm:2xl sm:leading-9 sm:tracking-wider">
                        Hello! My name is Denis. From responsive layouts to custom animations and interactive features, I am dedicated to staying up-to-date with the latest industry standards and best practices, in order to ensure that every project I work on is not only visually stunning, but also optimized for performance, accessibility, and user experience.
                    </article>
                    <p className="text-slate-400 text-xl tracking-normal leading-8 mb-5 sm:2xl sm:leading-9 sm:tracking-wider">Here are a few technologies I have been working with recently:</p>
                    <div className='flex gap-10'>
                        <div>
                            <div className='flex place-items-center gap-3'><FontAwesomeIcon icon={faSquare} className='text-cyan-300 text-sm' /> <span className='text-slate-400'>{`JavaScript(ES6+)`}</span></div>
                            <div className='flex place-items-center gap-3'><FontAwesomeIcon icon={faSquare} className='text-cyan-300 text-sm' /> <span className='text-slate-400'>React</span></div>
                            <div className='flex place-items-center gap-3'><FontAwesomeIcon icon={faSquare} className='text-cyan-300 text-sm' /> <span className='text-slate-400'>Third Party API</span></div>
                        </div>
                        <div>
                            <div className='flex place-items-center gap-3'><FontAwesomeIcon icon={faSquare} className='text-cyan-300 text-sm' /> <span className='text-slate-400'>Redux</span></div>
                            <div className='flex place-items-center gap-3'><FontAwesomeIcon icon={faSquare} className='text-cyan-300 text-sm' /> <span className='text-slate-400'>Tailwind</span></div>
                            <div className='flex place-items-center gap-3'><FontAwesomeIcon icon={faSquare} className='text-cyan-300 text-sm' /> <span className='text-slate-400'>Unit Testing</span></div>
                        </div>

                    </div>
                </div>
                <div className='w-3/5 max-w-xs h-96 place-self-center lg:w-2/6 lg:place-self-start relative'>
                    <div className="absolute rounded-md w-full h-full bg-cyan-300 opacity-60 z-10 transition-all duration-300 hover:bg-opacity-0 border-cyan-300"></div>
                    <img src="./images/Villisika_2.jpg" alt="Denis Igonin picture" className="w-full h-full object-cover rounded-md" />
                </div>
            </div>
        </section>
    )
}

export default About
