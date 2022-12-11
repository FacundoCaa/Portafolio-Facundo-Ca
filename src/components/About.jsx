import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBootstrap, faGitAlt, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { faSquareShareNodes, faBook, faGamepad, faDumbbell, faMugHot, faLeaf, faFileArrowDown} from '@fortawesome/free-solid-svg-icons'
import './styles/About.css'


export const About = () => {
  return (
    <section id='about' className='about'>
        <div className='about_me'>
            <h1 className='about_title'>Sobre mi</h1>
            <p className='about_description'>Soy Facundo Cañoli, Programador Frontend, especializado en JavaScript y React. Comenze a formarme de manera autodidacta en Enero de 2022 y complementando con cursos en udemy. Busco mi primera experiencia laboral con el objetivo de mejorar mis habilidades y aportar valor al equipo de trabajo</p>
        </div>
        <div className='about_skills'>
            <h1 className='about_title'>Habilidades</h1>
            <ul className="about_list">
                <li className="list_item"><FontAwesomeIcon icon={faSquareJs} /> JavaScript</li>
                <li className="list_item"><FontAwesomeIcon icon={faReact} /> React</li>
                <li className="list_item"><FontAwesomeIcon icon={faGitAlt} /> GIT</li>
                <li className="list_item"><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</li>
                <li className="list_item"><FontAwesomeIcon icon={ faLeaf } /> MongoDB </li>
                <li className="list_item"><FontAwesomeIcon icon={faSquareShareNodes} /> NodeJS</li>
            </ul>
        </div>
        <div className='about_hobbies'>
            <h1 className='about_title'>Hobbies</h1>
            <ul className="about_list">
                <li className="list_item"><FontAwesomeIcon icon={faBook} /> Leer</li>
                <li className="list_item"><FontAwesomeIcon icon={faGamepad} /> Videojuegos</li>
                <li className="list_item"><FontAwesomeIcon icon={ faMugHot } /> Café</li>
                <li className="list_item"><FontAwesomeIcon icon={ faDumbbell } /> Gimnasio</li>
            </ul>
        </div>
        <div className='about_download'>
            <h1 className='about_title'>Descarga mi currículum</h1>
            <a style={{color: "#fff"}} href="https://drive.google.com/uc?export=download&id=18quY9V9yc7YBMZsKG9hxf2XMl9HSnR4U">
                <button type="button" class="about_button btn btn-dark"><FontAwesomeIcon className='CV_icon' icon={faFileArrowDown} />CV</button>
            </a>
        </div>
    </section>
  )
}
