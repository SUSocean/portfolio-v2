const Contact = () => {
    return (
        <section id="contact" className="mx-auto w-5/6 min-h-screen max-w-5xl">
            <div className='flex place-items-center gap-5 mb-20'>
                <h3 className="text-slate-200 text-2xl font-semibold sm:text-4xl">Get In Touch</h3>
                <span className='w-72 h-0.5 bg-slate-600 sm:w-80'></span>
            </div>
            <div className="min-h-[calc(100vh-116px)] flex flex-col justify-center">
                <article className="text-slate-400 mb-32 mx-auto max-w-2xl text-xl tracking-normal leading-8 sm:text-2xl sm:leading-9 sm:tracking-wider">
                    Currently I’m looking for the new opportunities. If you have any offers,
                    questions or just want to say Hi, my inbox is always open.
                </article>

                <div className='relative z-20 mx-auto w-min h-min'>
                    <a href="mailto:igonind.a1@gmail.com" className='z-10 text-center border-2 bg-slate-900 border-cyan-300 px-7 w-36 h-11  block mx-auto py-2 rounded-md text-cyan-300 cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200'>
                        Say Hi
                    </a>
                    <span className='rounded-md absolute top-0 left-0 w-full h-full bg-cyan-300 -z-10'></span>
                </div>
            </div>
        </section>
    )
}

export default Contact