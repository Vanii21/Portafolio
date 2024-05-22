import './about.css';
import data from '../../data/data_About.js';
import imgFile from '../../assets/file.svg'
import CV from '../../assets/CV.pdf';
import Info from './Info';

const About = () => {


  return (
    <section className="about section" id="about">
        <h2 className="section__title">Sobre mí</h2>
        <span className="section__subtitle">Mi experiencia profesional</span>

        <div className="about__container container grid">

            <div className="about__data">
              
                <div className="about__info grid">
                    {data.map( ({icon, category, description}) => (<Info key={category} icon={icon} category={category} description={description}/>))}
                </div>

                <p className="about__description">Poseo conocimientos sobre tecnologías TI en la administración y seguridad de los sistemas informáticos. Se que mi experiencia y alta capacidad me hace candidato ideal para ocupar el puesto asignado de tan prestigiosa empresa.</p>
                <a download="" href={CV} className="button button--flex">
                    Descargar
                    <img src={imgFile} alt="CV" />
                </a>
            </div>
        </div>
    </section>
  )
}

export default About
