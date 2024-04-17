import PropTypes from 'prop-types'
import ElementSkills from "./ElementSkills.jsx";

const CardSkills = ({category, list}) => {

  return (
    <div className="skills__content">
      <h3 className="skills__title">{category}</h3>
      <div className="skills__box">
        
        <div className="skills__group">
          {list.slice(0, Math.ceil(list.length / 2)).map(({ name }) => (
            <ElementSkills key={name} name={name} />
          ))}
        </div>

        <div className="skills__group">
          {list.slice(Math.ceil(list.length / 2)).map(({ name }) => (
            <ElementSkills key={name} name={name} />
          ))}
        </div>

      </div>
    </div>
  );
};

CardSkills.propTypes = {
  category: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

export default CardSkills;
