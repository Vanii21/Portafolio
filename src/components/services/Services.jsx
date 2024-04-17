import './services.css';
import CardServices from './CardServices';
import data from '../../data/data_Services.js';

const Services = () => {
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Servicios</h2>
        <span className="section__subtitle">Mi nivel de conocimiento</span>

        <div className="services__container container grid">

            {data.map( ({icon, category, description, list}) => <CardServices key={category} icon={icon} category={category} description={description} list={list}/>)}

        </div>    

    </section>
  )
}

export default Services
