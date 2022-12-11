import './styles/Projects.css'
import project01 from './../images/project01.jpg'
import project02 from './../images/project02.png'
import project03 from './../images/project03.png'
import project04 from './../images/project04.png'
import project05 from './../images/project05.png'
import { CardItem } from './items/CardItem'

export const Projects = () => {
  return (
    <section id='Projects' className='Project'>
        <h1 className='Projects_title'> Proyectos </h1>
        <div className='Projects_portfolio'>
            <CardItem 
              src={project01}
              title="GiftApp" 
              desc="Aplicacion Web: React"
              rep="https://github.com/FacundoCaa/GiftExpertApp"
              web=""
              />
            <CardItem 
              src={project02} 
              title="JournalApp" 
              desc="Aplicacion Web: React, Redux y Firebase"
              rep=""
              web="" 
              />
            <CardItem 
              src={project03} 
              title="Este portafolio" 
              desc="Portafolio: React, Bootstrap"
              rep=""
              web=""
              />
            <CardItem 
              src={project04} 
              title="HeroesApp" 
              desc="Aplicacion Web: React"
              rep=""
              web=""
              />
            <CardItem 
              src={project05} 
              title="CalendarApp" 
              desc="En desarrollo"
              />
        </div>
    </section>
  )
}
