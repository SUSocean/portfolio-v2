const Hero = () => {
    return (
        <section id='hero' className="pt-9 min-h-screen flex justify-center place-content-center">
            <div className="py-14 w-5/6 max-w-5xl flex flex-col justify-center place-content-center">
                <p className="text-cyan-300 text-xl mb-8">Hi, my name is</p>
                <h2 className="text-slate-300 text-4xl font-bold mb-6 tracking-wide sm:text-6xl">Denis Igonin</h2>
                <h3 className="text-slate-400 text-4xl font-semibold mb-4 sm:6xl">I am a software engineer</h3>
                <article className="text-slate-400 text-xl tracking-normal leading-8 sm:2xl sm:leading-9 sm:tracking-wider">
                    With the focus on front-end, my primary focus is on creating engaging, intuitive, and accessible digital experiences that prioritize the needs of the user. I specialize in crafting elegant, human-centered solutions that connect people with the information they need in a seamless and efficient manner.
                </article>
            </div>
        </section>
    )
}

export default Hero


