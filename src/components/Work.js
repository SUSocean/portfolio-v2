import { useState } from 'react'
import SingleNWProject from './SingleNWProject'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Work = () => {
    const [showMore, setShowMore] = useState(false)
    return (
        <section id="work" className="pb-20 mx-auto w-5/6 max-w-5xl scroll-mt-24">
            <div className='flex place-items-center gap-5 mb-20'>
                <h3 className="text-slate-200 text-2xl font-semibold sm:4xl">Some Things I've Build</h3>
                <span className='w-32 h-0.5 bg-slate-600 sm:w-52 lg:w-96'></span>
            </div>
            {/* 1 */}
            <div className='relative z-20 mb-20'>
                <h4 className="text-slate-300 text-2xl mb-5 font-semibold pl-8 pt-5 lg:p-0">WatchList</h4>
                <article className="p-5 mb-6 rounded-md w-9/10 text-slate-300 text-xl tracking-normal leading-8 sm:2xl sm:leading-9 sm:tracking-wider lg:w-1/2 lg:bg-slate-600">
                    A web site where you can search for movies, read information
                    about them and save to your watchlist for later.
                </article>
                <div className="pl-8 pb-5 text-slate-400 flex gap-5 lg:pl-0 ">
                    <a className='hover:text-cyan-300' href="#"><FontAwesomeIcon icon={faCode} /></a>
                    <a className='hover:text-cyan-300' href="#"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </div>
                <img className='absolute top-0 -z-10 w-full h-full object-cover rounded-md opacity-10 lg:w-3/5 lg:right-0 lg:opacity-40 lg:hover:opacity-100 transition-all duration-500' src="./images/Villisika_2.jpg" alt="watchlist" />
            </div>
            {/* 2 */}
            <div className='relative z-20 mb-20'>
                <h4 className="text-slate-300 text-2xl mb-5 font-semibold pl-8 pt-5 lg:p-0 lg:text-right lg:ml-auto">WatchList</h4>
                <article className="lg:ml-auto p-5 mb-6 rounded-md w-9/10 text-slate-300 text-xl tracking-normal leading-8 sm:2xl sm:leading-9 sm:tracking-wider lg:w-1/2 lg:bg-slate-600">
                    A web site where you can search for movies, read information
                    about them and save to your watchlist for later.
                </article>
                <div className="pl-8 pb-5 text-slate-400 flex gap-5 lg:pl-0 lg:justify-end">
                    <a className='hover:text-cyan-300' href="#"><FontAwesomeIcon icon={faCode} /></a>
                    <a className='hover:text-cyan-300' href="#"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </div>
                <img className='absolute top-0 -z-10 w-full h-full object-cover rounded-md opacity-10 lg:w-3/5 lg:left-0 lg:opacity-40 lg:hover:opacity-100 transition-all duration-500' src="./images/Villisika_2.jpg" alt="watchlist" />
            </div>
            {/* 3 */}
            <div className='relative z-20 pb-10 mb-32'>
                <h4 className="text-slate-300 text-2xl mb-5 font-semibold pl-8 pt-5 lg:p-0">WatchList</h4>
                <article className="p-5 mb-6 rounded-md w-9/10 text-slate-300 text-xl tracking-normal leading-8 sm:2xl sm:leading-9 sm:tracking-wider lg:w-1/2 lg:bg-slate-600">
                    A web site where you can search for movies, read information
                    about them and save to your watchlist for later.
                </article>
                <div className="pl-8 pb-5 text-slate-400 flex gap-5 lg:pl-0 ">
                    <a className='hover:text-cyan-300' href="#"><FontAwesomeIcon icon={faCode} /></a>
                    <a className='hover:text-cyan-300' href="#"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </div>
                <img className='absolute top-0 -z-10 w-full h-full object-cover rounded-md opacity-10 lg:w-3/5 lg:right-0 lg:opacity-40 lg:hover:opacity-100 transition-all duration-500' src="./images/Villisika_2.jpg" alt="watchlist" />
            </div>
            {/* other */}
            <h3 className="text-slate-200 text-2xl mb-20 font-semibold sm:4xl text-center">Other Noteworthy Projects</h3>

            <div className='flex place-items-center flex-col text-slate-300'>
                <div className='lg:flex lg:gap-5'>
                    <SingleNWProject
                        title='WatchList'
                        description='A web site where you can search for movies, read information
                        about them and save to your watchlist for later.'
                        codeLink='#'
                        SiteLink='#' />
                    <SingleNWProject
                        title='WatchList'
                        description='A web site where you can search for movies, read information
                        about them and save to your watchlist for later.'
                        codeLink='#'
                        SiteLink='#' />
                    <SingleNWProject
                        title='WatchList'
                        description='A web site where you can search for movies, read information
                        about them and save to your watchlist for later.'
                        codeLink='#'
                        SiteLink='#' />
                </div>
                <div className={`transition-all duration-300 lg:gap-5 ${showMore ? 'block lg:flex' : 'hidden'}`}>
                    <SingleNWProject
                        title='WatchList'
                        description='A web site where you can search for movies, read information
                        about them and save to your watchlist for later.'
                        codeLink='#'
                        SiteLink='#' />
                    <SingleNWProject
                        title='WatchList'
                        description='A web site where you can search for movies, read information
                        about them and save to your watchlist for later.'
                        codeLink='#'
                        SiteLink='#' />
                    <SingleNWProject
                        title='WatchList'
                        description='A web site where you can search for movies, read information
                        about them and save to your watchlist for later.'
                        codeLink='#'
                        SiteLink='#' />
                </div>
            </div>

            <div className='relative z-20 mx-auto w-min h-min'>
                <button className='z-10 border-2 bg-slate-900 border-cyan-300 px-7 w-36 h-11  block mx-auto py-2 rounded-md text-cyan-300 cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200' onClick={() => setShowMore(prevState => !prevState)}>
                    {showMore ? 'Show Less' : 'Show More'}
                </button>
                <span className='rounded-md absolute top-0 left-0 w-full h-full bg-cyan-300 -z-10'>{showMore ? 'Show Less' : 'Show More'}</span>
            </div>
        </section>
    )
}

export default Work