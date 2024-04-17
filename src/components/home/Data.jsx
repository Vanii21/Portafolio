import imgSend from '../../assets/send.svg';
import imgProgram from '../../assets/program.svg';

const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">
            Vanii Alcantara
            <img className="home__imgProgram" src={imgProgram} alt="Program" />
        </h1>
        <h3 className="home__subtitle">Programador Jr</h3>
        <p className="home__description">Soy una persona reciliente y comprometida a mi carrera, tengo la capacidad de crear sistemas funcionales, escalable y mantenibles.</p>

        <a href="https://t.me/VaniiAlcantara" target='_blank' className="button button--flex">
            Contactame 
            <img src={imgSend} alt="Send" />
        </a>
    </div>
  )
}

export default Data
