import PropTypes from 'prop-types';
import './services.css';

const ElementServices = ({itemList}) => {
  return (
    <li className="services__modal-service">
        <i className="uil uil-check-circle services__modal-icon"></i>
        <p className="services__modal-info">{itemList}</p>
    </li>
  )
}

ElementServices.propTypes = {
  itemList: PropTypes.string.isRequired,
}

export default ElementServices
