import './qualification.css'
import SectionQual from './SectionQual.jsx';
import data  from '../../data/data_Qualification.js';

const Qualification = () => {

  return (
    <section className="qualification section" id="education">
        <h2 className="section__title">Educación</h2>
        <span className="section__subtitle">Mi trayectoria profesional</span>

        <div className="qualification__container container">

            <div className="qualification__tabs">

                <div  className="qualification__button qualification__active button--flex">
                    <i className={data[0].icon}></i>
                    {data[0].category}
                </div>

                <div  className="qualification__button qualification__active button--flex">
                    <i className={data[1].icon}></i>
                    {data[1].category}
                </div>

            </div>

            {data.map( ({category, list}, index) => (<SectionQual key={category} index={index} data={list}/>))}

            
        </div>
    </section>
  )
}

export default Qualification
