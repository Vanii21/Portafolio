import PropType from 'prop-types';

const Info = ({icon, category, description}) => {
  return (
      <div className="about__box">
        <i className={icon}></i>
        <h3 className="about__title">{category}</h3>
        <span className="about__subtitle">{description}</span>
      </div>
  )
}

Info.propTypes = {
  icon: PropType.string.isRequired,
  category: PropType.string.isRequired,
  description: PropType.string.isRequired,
}

export default Info
