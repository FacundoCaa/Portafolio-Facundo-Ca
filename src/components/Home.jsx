import profile from '../images/profile.png'
import './styles/Home.css'


export const Home = () => {
  return (
    <section id='home' className="home">
        <div className="home_background container-fluid d-flex"></div>
        <picture>
            <img className='home_profile' alt="profile" src={profile}/>
        </picture>
        <div className='home_description'>
            <p className='animate__animated animate__backInDown home__title--primary'>Hola!</p>
            <h1 className='animate__animated animate__backInDown home_title'>Soy Facundo Cañoli</h1>
            <p className='animate__animated animate__backInUp animate__delay-1s home__title--primary'>Desarrollador Frontend</p>
        </div>
    </section>
  )
}

