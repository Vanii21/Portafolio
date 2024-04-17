import data from '../../data/data_social';

const Social = () => {
  return (
    <div className="home__social">
        {data.map( ({ href, icon }) => (<a key={href} href={href} className="home__social-icon" target="_blank"><i className={icon}></i></a>))}
    </div>
  )
}

export default Social
