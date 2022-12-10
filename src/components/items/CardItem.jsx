import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const CardItem = ({src, title, desc}) => {
  return (
    <div className='Projects_item'>
        <picture>
            <img height="190" width="375" className="Projects.img" src={src} alt="" />
        </picture>
        <div className='Projects_description animate__animated animate__slideInUp'>
            <h3 className='Projects_description_title'>{ title }</h3>
            <p className="Projects__description_text">{ desc }</p>
            <div className="button_container">
                <a className="Projects_button" href="#home"><FontAwesomeIcon icon={faGlobe} /> Website</a>
                <a className="Projects_button" href="#home"><FontAwesomeIcon icon={faGithub} /> Repositorio</a>
            </div>
        </div>
    </div>
  )
}
