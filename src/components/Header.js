import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scroledDown, setScrolledDown] = useState(false)
    const [prevPos, setPrevPos] = useState(0)
    const handleClick = () => {
        setMenuOpen(prevState => !prevState)
    }


    useEffect(() => {
        const handleScrol = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY < prevPos) {
                    setScrolledDown(false)
                } else {
                    setScrolledDown(true)
                }

                setPrevPos(window.scrollY)
            }
        }
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScrol)
            return () => {
                window.removeEventListener('scroll', handleScrol)
            }
        }
    }, [prevPos])

    return (
        <header className={`w-full h-24 bg-slate-900 shadow-lg z-50 origin-top fixed  ${scroledDown && !menuOpen ? "animate-close-nav" : "animate-open-nav"}`}>
            <nav aria-label="main" className="max-w-xl h-24 ml-auto mr-14">
                <ul className="h-24 hidden justify-end items-center relative text-slate-200 text-xl md:flex">
                    <a href="#about"><li className="mr-16 p-2 cursor-pointer hover:text-cyan-300 transition-all duration-300">About</li></a>
                    <a href="#work"><li className="mr-16 p-2 cursor-pointer hover:text-cyan-300 transition-all duration-300">Work</li></a>
                    <a href="#contact"><li className="mr-16 p-2 cursor-pointer hover:text-cyan-300 transition-all duration-300">Contact</li></a>
                    <li className='relative z-20 mx-auto w-min h-min'>
                        <Link target="_blank" to='/resume' className='z-10 flex justify-center place-items-center border-2 bg-slate-900 border-cyan-300 px-7 w-36 h-11 mx-auto py-2 rounded-md text-cyan-300 cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200'>
                            Resume
                        </Link>
                        <span className='rounded-md absolute top-0 left-0 w-full h-full bg-cyan-300 -z-10'></span>
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
                    <li className="p-2 cursor-pointer hover:text-cyan-300 transition-all duration-300"><a href="#work" onClick={handleClick}>Work</a></li>
                    <li className="p-2 cursor-pointer hover:text-cyan-300 transition-all duration-300"><a href="#contact" onClick={handleClick}>Contact</a></li>
                    <li onClick={handleClick} className='relative z-20 mx-auto w-min h-min'>
                        <Link to='/resume' target="_blank" className='z-10 flex justify-center place-items-center border-2 bg-slate-800 border-cyan-300 px-7 w-40 h-14 mx-auto py-2 rounded-md text-cyan-300 cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200'>
                            Resume
                        </Link>
                        <span className='rounded-md absolute top-0 left-0 w-full h-full bg-cyan-300 -z-10'></span>
                    </li>

                </ul>
            </nav>
            {menuOpen && <div className="absolute left-0 top-0 w-full h-screen -z-20 bg-slate-900 opacity-70"></div>}
        </header >
    )
}

export default Header