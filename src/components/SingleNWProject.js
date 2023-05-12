import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const SingleNWProject = ({ title, description, codeLink, SiteLink }) => {
    return (
        <div className='max-w-sm msx-w-sm  bg-slate-600 p-4 mb-10'>
            <div className='flex justify-between mb-5'>
                <h4 className="text-2xl font-semibold">{title}</h4>
                <div className="text-slate-400 flex gap-5 lg:pl-0 ">
                    <a target='_black' className='hover:text-cyan-300' href={codeLink}><FontAwesomeIcon icon={faCode} /></a>
                    <a target='_black' className='hover:text-cyan-300' href={SiteLink}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </div>
            </div>
            <article >
                {description}
            </article>
        </div>
    )
}

export default SingleNWProject