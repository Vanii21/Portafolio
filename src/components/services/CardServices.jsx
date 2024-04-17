import PropTypes from 'prop-types';
import './services.css';
import ElementServices from "./ElementServices"
import { useState } from 'react';

const CardServices = ({icon, category, description, list}) => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="services__content">
        <div className="services__card">
            <i className={icon}></i>
            <h3 className="services__title">{category}</h3>

        </div>

        <span className="services__button" onClick={() => toggleTab(1)}>Ver Mas <i className="uil uil-arrow-right services__button-icon"></i></span>

        <div className={ toggleState === 1 ? "services__modal active-modal" : "services__modal" }>
            <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                <h3 className="services__modal-title">{category}</h3>
                <p className="services__modal-description">{description}</p>

                <ul className="services__modal-services grid">

                    {list.map( ({itemList}) => (<ElementServices key={itemList} itemList={itemList}/>) )}

                </ul>

            </div>
        </div>
    </div>
  )
}

CardServices.propTypes = {
    icon: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
}

export default CardServices
