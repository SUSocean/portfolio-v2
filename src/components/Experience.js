const Experience = () => {
    return (
        <section id="experience" className="mb-32 mx-auto w-5/6 max-w-5xl scroll-mt-24">
            <div className='flex place-items-center gap-5 mb-40'>
                <h3 className="text-slate-200 text-2xl font-semibold sm:text-4xl">My Experience</h3>
                <span className='w-72 h-0.5 bg-slate-600 sm:w-96'></span>
            </div>


            <div className='flex flex-col gap-7 lg:flex-row lg:justify-between'>
                <ul>
                    <li>
                        <div className="text-slate-300 text-2xl mb-5 font-semibold pt-5 ">
                            MAY 2023 - present
                        </div>
                        <div>
                            <h4 className="text-slate-300 text-2xl mb-5 font-semibold pt-5  inline">Wordpress Developer</h4><span className="text-slate-400 pl-2 pr-2 text-1xl mb-5 font-semibold  inline">at</span><h4 className="text-slate-300 text-2xl mb-5 font-semibold pt-5  inline">Svetlana's Web Stutio</h4>
                            <p className="pt-10 lg:ml-auto mb-6 rounded-md w-9/10 text-slate-300 text-xl tracking-normal leading-8 sm:leading-9 sm:tracking-wider">I focus on creating and maintaining websites using WordPress. I create user-friendly websites and make sure they work well. My job involves fixing any issues and coming up with new ideas.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Experience
