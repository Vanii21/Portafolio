import PropTypes from 'prop-types';

const ItemFooter = ({ title, href }) => {
  return (
    <li>
        <a href={href} className="footer__link">{title}</a>
    </li>
  );
}

ItemFooter.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
}

export default ItemFooter;
