import PropTypes from 'prop-types';

const SectionQual = ({index, data}) => {

  return (
        <div className="qualification__sections">
            <div className="qualification__content qualification__content-active">
                <>
                    {index % 2 === 0 ? (
                        <>
                            {data.map( ({title, lugar, subtitle, fecha}, index) => (
                                <div className="qualification__data" key={index}>
                                    <div>
                                        <h3 className="qualification__title">{title}</h3>
                                        <span className='qualification__subtitle'>{lugar}</span>
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
                            ))}
                        </>
                    ):(
                        <>
                            {data.map( ({title, lugar, subtitle, fecha}, index) => (
                                <div className="qualification__data" key={index}>
                                    <div></div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                                
                                    <div>
                                        <h3 className="qualification__title">{title}</h3>
                                        <span className='qualification__subtitle'>{lugar}</span>
                                        <span className='qualification__subtitle'>{subtitle}</span>
                                        <div className="qualification__calender">
                                            <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                                            {fecha}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>     
                    )}
                </>
            </div>
        </div>
  )
}

SectionQual.propTypes = {
    data: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
}

export default SectionQual
