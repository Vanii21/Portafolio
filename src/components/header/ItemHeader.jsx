import PropTypes from 'prop-types';

const ItemHeader = ({ title, href, icon }) => {
  return (
    <li className="nav__item">
        <a href={href} className="nav__link active-link">
            <i className={icon}></i> { title }
        </a>
    </li>
  );
}

ItemHeader.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default ItemHeader;
