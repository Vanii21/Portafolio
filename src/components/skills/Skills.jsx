
import CardSkills from "./CardSkills.jsx";
import './skills.css';
import data from "../../data/data_Skills.js";


const Skills = () => {

  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Habilidades</h2>
        <span className="section__subtitle">Mi nivel tecnico</span>

        <div className="skills__container container grid">

          {data.map( ({category, list}) => (<CardSkills key={category} category={category} list={list}/> ))}

        </div>  
    </section>
  )
}

export default Skills
