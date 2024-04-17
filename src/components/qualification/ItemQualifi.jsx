import PropTypes from 'prop-types';

const ItemQualifi = ({category, data, index}) => {

    console.log(data);

    return (
        <>
            {index % 2 === 0 ? (
                <div className="qualification__data" key={index}>
                    <div>
                        <h3 className="qualification__title">{title}</h3>
                        <span className='qualification__subtitle'>{subtitle}</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                            {fecha}
                        </div>
                    </div>
            
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>
            ) : (
                <div className="qualification__data" key={index}>
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                        
                    <div>
                        <h3 className="qualification__title">{title}</h3>
                        <span className='qualification__subtitle'>{subtitle}</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                            {fecha}
                        </div>
                    </div>
                </div> 
            )}
        </>
    );
  };
  

ItemQualifi.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
}

export default ItemQualifi
