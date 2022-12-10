import './styles/Contact.css'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export const Contact = () => {
  return (
    <section id='Contact' className='Contact'>
        <h1 className='Contact_title'>Contacto</h1>
        <div className='Contact_items'>
            <a className='Contact_item_container' href='mailto:facu.caaa@gmail.com'>
                <FontAwesomeIcon className='Contact_icon' icon={ faEnvelope } />
            </a>
            <a target="__BLANK" href='https://github.com/FacundoCaa'>
                <FontAwesomeIcon className='Contact_icon' icon={ faGithub } />
            </a>
            <a target="__BLANK" href='https://www.linkedin.com/in/facundoca%C3%B1oli/'>
                <FontAwesomeIcon className='Contact_icon' icon={ faLinkedin } />
            </a>
        </div>
    </section>
  )
}
