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
                <h3 className="text-slate-200 text-2xl font-semibold sm:text-4xl">Some Things I've Build</h3>
                <span className='w-32 h-0.5 bg-slate-600 sm:w-52 lg:w-96'></span>
            </div>
            {/* 1 */}
            <div className='relative z-20 mb-20'>
                <h4 className="text-slate-300 text-2xl mb-5 font-semibold pl-8 pt-5 lg:p-0">WatchList</h4>
                <article className="p-5 mb-6 rounded-md w-9/10 text-slate-300 text-xl tracking-normal leading-8 sm:leading-9 sm:tracking-wider lg:w-1/2 lg:bg-slate-600">
                    The website is a movie database platform that allows users to search and browse for their favorite movies, read information about them, and save them for later. By leveraging an API, the platform provides users with comprehensive and up-to-date information on movies, including ratings, posters, description and more. Built using React and Redux, the website offers a seamless user experience with a responsive and intuitive interface.
                </article>
                <div className="pl-8 pb-5 text-slate-400 flex gap-5 lg:pl-0 ">
                    <a target='_black' className='hover:text-cyan-300' href="https://github.com/SUSocean/watchlistRenewed"><FontAwesomeIcon icon={faCode} /></a>
                    <a target='_black' className='hover:text-cyan-300' href="https://di-watchlist-v2.netlify.app/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </div>
                <img className='absolute top-0 -z-10 w-full h-full object-cover rounded-md opacity-10 lg:w-3/5 lg:right-0 lg:opacity-40 lg:hover:opacity-100 transition-all duration-500' src="./images/watchlist.png" alt="watchlist" />
            </div>
            <div className='relative z-20 mb-20'>
                <h4 className="text-slate-300 text-2xl mb-5 font-semibold pl-8 pt-5 lg:p-0 lg:text-right lg:ml-auto">Quizzical</h4>
                <article className="lg:ml-auto p-5 mb-6 rounded-md w-9/10 text-slate-300 text-xl tracking-normal leading-8 sm:leading-9 sm:tracking-wider lg:w-1/2 lg:bg-slate-600">
                    Fun and interactive platform where users can select various categories and preferences to generate random questions for them to answer. Once the user selects their desired options, the website generates a series of thought-provoking questions that range from general knowledge to pop culture and more. The website is designed to be user-friendly and offers a great experience for anyone looking to have a bit of fun while learning something new.
                </article>
                <div className="pl-8 pb-5 text-slate-400 flex gap-5 lg:pl-0 lg:justify-end">
                    <a target='_black' className='hover:text-cyan-300' href="https://github.com/SUSocean/quizicalRenewed"><FontAwesomeIcon icon={faCode} /></a>
                    <a target='_black' className='hover:text-cyan-300' href="https://di-quizzical-v2.netlify.app/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </div>
                <img className='absolute top-0 -z-10 w-full h-full object-cover rounded-md opacity-10 lg:w-3/5 lg:left-0 lg:opacity-40 lg:hover:opacity-100 transition-all duration-500' src="./images/quizzical.png" alt="watchlist" />
            </div>
            {/* 3 */}
            <div className='relative z-20 pb-10 mb-32'>
                <h4 className="text-slate-300 text-2xl mb-5 font-semibold pl-8 pt-5 lg:p-0">Focus Screen</h4>
                <article className="p-5 mb-6 rounded-md w-9/10 text-slate-300 text-xl tracking-normal leading-8 sm:leading-9 sm:tracking-wider lg:w-1/2 lg:bg-slate-600">
                    The website is a perfect destination for nature lovers who want to stay focused and organized while enjoying the beauty of nature. Users are greeted with a random nature background upon arrival, along with the current time and weather information. The website also provides a todo list feature that allows users to add and save their tasks for the day. With a clean and minimalist design, the website promotes a distraction-free environment.
                </article>
                <div className="pl-8 pb-5 text-slate-400 flex gap-5 lg:pl-0 ">
                    <a target='_black' className='hover:text-cyan-300' href="https://github.com/SUSocean/focus_screen"><FontAwesomeIcon icon={faCode} /></a>
                    <a target='_black' className='hover:text-cyan-300' href="https://di-focus-screen.netlify.app/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </div>
                <img className='absolute top-0 -z-10 w-full h-full object-cover rounded-md opacity-10 lg:w-3/5 lg:right-0 lg:opacity-40 lg:hover:opacity-100 transition-all duration-500' src="./images/focusScreen.png" alt="watchlist" />
            </div>
            {/* other */}
            <h3 className="text-slate-200 text-2xl mb-20 font-semibold sm:text-4xl text-center">Other Noteworthy Projects</h3>

            <div className='flex place-items-center flex-col text-slate-300'>
                <div className='lg:flex lg:gap-5'>
                    <SingleNWProject
                        title='Sedona'
                        description='The hotel website, constructed using HTML/CSS and JavaScript, contains a range of options that enable users to effortlessly select the ideal hotel for their needs.'
                        codeLink='https://github.com/SUSocean/sedona'
                        SiteLink='https://denis-i-sedona.netlify.app/index.html' />
                    <SingleNWProject
                        title='Color Picker'
                        description='The website is a color scheme generator. Users can browse through color palettes, customize them to their liking, and save the hex codes for future reference.'
                        codeLink='https://github.com/SUSocean/color-scheme-generator'
                        SiteLink='https://denis-i-color-picker.netlify.app/' />
                    <SingleNWProject
                        title={`Jimm's Dinner`}
                        description='The website is delivery-app mock where users can select food to be delivered and proceed with with the payment.'
                        codeLink={`https://github.com/SUSocean/Jimmy-s-Dinner/tree/main/Jimmy's%20Dinner`}
                        SiteLink='https://denis-igonin-dinner-project.netlify.app/' />
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