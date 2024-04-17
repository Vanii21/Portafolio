import { useRef } from 'react';
import data from '../../data/data_Contact';
import ItemContact from './itemContact';
import imgSend from '../../assets/send.svg';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bh46cog', 'template_v7bzkei', form.current, {
        publicKey: '5gtTLEv99E3nu_DSq',
      })
      e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Contactame</h2>
        <span className="section__subtitle">Puedes comunicarte conmigo</span>

        <div className="contact__container container grid">

          <div className="contact__content">
            
            <h3 className="contact__title">Enviame un mensaje</h3>

            {data.map( ({ title, data, icon, href }) => (<ItemContact key={title} title={title} data={data} icon={icon} href={href} />) )}
            
          </div>

          <div className="contact__content">
            <h3 className="contact__title">Comunicate conmigo</h3>

            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="contact__form-div">

                <label className="contact__form-tag">Nombre:</label>
                <input type="text" name="txtNombre" className="contact__form-input" placeholder="Ingresa tu nombre" />

              </div>
              <div className="contact__form-div">

                <label className="contact__form-tag">Correo Electronico:</label>
                <input type="text" name="txtCorreo" className="contact__form-input" placeholder="Ingresa tu Correo Electronico" />

              </div>
              <div className="contact__form-div contact__form-area">

                <label className="contact__form-tag">Mensaje:</label>
                <textarea name="txtArea" cols="30" rows="10" className="contact__form-input" placeholder="Puedes escribirme el asunto del mensaje"></textarea>

              </div>
              <button target='_blank' className="button button--flex">
                Enviar Mensaje 
                <img src={imgSend} alt="Send" />
              </button>
            </form>
          </div>

        </div>
    </section>
  )
}

export default Contact
