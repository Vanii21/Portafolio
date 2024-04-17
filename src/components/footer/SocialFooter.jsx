import data from '../../data/data_social';

const SocialFooter = () => {
  return (
    <div className="footer__social">
        {data.map( ({ href, icon }) => (<a key={href} href={href} className="home__social-icon footer__social-link" target="_blank"><i className={icon}></i></a>))}
    </div>
  )
}

export default SocialFooter;
