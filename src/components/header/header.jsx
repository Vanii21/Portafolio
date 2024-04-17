import { useState } from 'react';
import data from '../../data/data_Header';
import './header.css';
import ItemHeader from './ItemHeader';

const Header = () => {
    /* ======== Toggle Menu ========== */
    const[Toggle, showMenu] = useState(false);

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Vanii Alcantara</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    
                    {data.map( ({ title, href, icon }) => (<ItemHeader key={title} title={title} href={href} icon={icon} />) )}

                </ul>

                <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>

            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header
