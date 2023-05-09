import { useState, useEffect } from "react"

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scroledDown, setScrolledDown] = useState(false)
    const [newPos, setNewPos] = useState(0)
    const [oldPos, setOldPos] = useState(0)
    const handleClick = () => {
        setMenuOpen(prevState => !prevState)
    }

    const handleScroll = () => {
        const pos = newPos
        console.log('asdf', newPos)
        setNewPos(Math.round(window.pageYOffset))
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        console.log(newPos)
    }, [newPos])
    return (
        <header className={`w-full h-24 bg-slate-900 shadow-lg z-10 ${scroledDown ? "hidden" : "fixed"}`}>
            <nav aria-label="main" className="max-w-xl h-24 ml-auto mr-14">
                <ul className="h-24 hidden justify-end items-center relative text-slate-200 text-xl md:flex">
                    <a href="#about"><li className="mr-16 p-2 cursor-pointer hover:text-cyan-300 transition-all duration-300">About</li></a>
                    <a href="#"><li className="mr-16 p-2 cursor-pointer hover:text-cyan-300 transition-all duration-300">Work</li></a>
                    <a href="#"><li className="mr-16 p-2 cursor-pointer hover:text-cyan-300 transition-all duration-300">Contact</li></a>
                    <a className="absolute right-0" href='#'>
                        <li className=" border-2 border-cyan-300 px-5 py-2 rounded-md text-cyan-300 cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:border-r-4 hover:border-b-4 transition-all duration-200 z-10">
                            Resume
                        </li>
                    </a>
                    <li className=" border-2 border-cyan-300 px-5 py-2 rounded-md text-cyan-300 cursor-pointer -translate-x-1 -translate-y-1 border-r-4 hover:border-b-4 transition-all duration-200 opacity-0 -z-10">
                        <a href='#'>Resume</a>
                    </li>

                </ul>
                <button className={`block cursor-pointer p-5 translate-y-7 ml-auto ${menuOpen ? 'toggle-btn' : ''} `}
                    onClick={handleClick}
                >
                    <div className={`block relative w-10 h-0.5 bg-cyan-300 before:content-[''] before:w-10 before:h-0.5 before:bg-cyan-300 before:absolute before:-top-2 before:left-0 after:content-[''] after:w-10 after:h-0.5 after:bg-cyan-300 after:absolute after:-bottom-2 after:left-0 md:hidden z-20 transition-all duration-300 before:transition-all before:transition-300 after:transition-all after:transition-300`}></div>
                </button>
            </nav>
            <nav aria-label="mobile" className={`h-screen w-3/5 bg-slate-800 -z-10 absolute right-0 top-0 origin-right animate-open-menu ${menuOpen ? 'block' : 'hidden'}`}>

                <ul className="h-full flex flex-col justify-center items-center gap-10 text-slate-200 text-3xl" >
                    <li className="p-2 cursor-pointer hover:text-cyan-300 transition-all duration-300"><a href="#about" onClick={handleClick}>About</a></li>
                    <li className="p-2 cursor-pointer hover:text-cyan-300 transition-all duration-300"><a href="#" onClick={handleClick}>Work</a></li>
                    <li className="p-2 cursor-pointer hover:text-cyan-300 transition-all duration-300"><a href="#" onClick={handleClick}>Contact</a></li>
                    <li className="group border-2 border-cyan-300 px-5 py-2 rounded-md text-cyan-300 cursor-pointer relative hover:-translate-x-1 hover:-translate-y-1 hover:border-r-4 hover:border-b-4 transition-all duration-200">
                        <a href='#' onClick={handleClick}>Resume</a>
                    </li>

                </ul>
            </nav>
        </header >
    )
}

export default Header