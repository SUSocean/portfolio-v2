const Contact = () => {
    return (
        <section id="contact" className="mx-auto w-5/6 min-h-screen max-w-5xl">
            <div className='flex place-items-center gap-5 mb-20'>
                <h3 className="text-slate-200 text-2xl font-semibold sm:4xl">Get In Touch</h3>
                <span className='w-72 h-0.5 bg-slate-600 sm:w-80'></span>
            </div>
            <div className="min-h-[calc(100vh-116px)] flex flex-col justify-center">
                <article className="text-slate-400 mb-32 mx-auto max-w-2xl text-xl tracking-normal leading-8 sm:text-2xl sm:leading-9 sm:tracking-wider">
                    Currently I’m looking for the new opportunities. If you have any offers,
                    questions or just want to say Hi, my inbox is always open.
                </article>

                <button className='border-2 border-cyan-300 px-12 block mx-auto py-2 rounded-md text-cyan-300 cursor-pointer relative hover:-translate-x-1 hover:-translate-y-1 hover:border-r-4 hover:border-b-4 transition-all duration-200'>Say Hi</button>
            </div>
        </section>
    )
}

export default Contact