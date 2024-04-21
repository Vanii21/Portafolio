import data from '../../data/data_Footer';
import ItemFooter from './ItemFooter';
import SocialFooter from './SocialFooter';

import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Vanii Alcantara</h1>

            <ul className="footer__list">
                
                {data.map( ({ title, href }) => (<ItemFooter key={title} title={title} href={href} />))}

            </ul>

            <SocialFooter />

            <span className="footer__copy">&#169; Vanii Alcantara. Ingeniero en Sistemas de Informacion</span>
        </div>
    </footer>
  )
}

export default Footer
