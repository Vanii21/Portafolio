
const itemContact = ({ title, data, icon, href }) => {
  return (
    <div className="contact__info">
        <div className="contact__card">
            <i className={icon}></i>

            <h3 className="contact__card-title">{title}</h3>

            <span className="contact__card-data">{data}</span>

            <a href={href} target="__blank" className="contact__button">Contactame <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
        </div>
    </div>
  );
}

export default itemContact;
