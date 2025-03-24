import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaGithub } from "react-icons/fa";
import "./contacts.css";

const Contacts = () => {
  return (
    <section className="contactsSection" id="contacts">
      <div className="contactsWrapper">
        <div className="containerDivContacts">
          <div className="contacts-header">
            <h2>Contatos</h2>
          </div>
          <div className="divContacsForm">
            <form className="contacts-form">
              <input
                type="text"
                placeholder="Nome"
                className="contacts-input"
              />
              <input
                type="email"
                placeholder="Email"
                className="contacts-input"
              />
              <textarea
                placeholder="Mensagem"
                className="contacts-textarea"
              />
              <button type="submit" className="contacts-button">
                Enviar
              </button>
            </form>
          </div>
        </div>
        <div className="socialContainer">
          <div className="socialButtons">
            <a
              href="https://www.instagram.com/leoellercunha"
              target="_blank"
              rel="noopener noreferrer"
              className="socialButton"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://wa.me/+5532998833302"
              target="_blank"
              rel="noopener noreferrer"
              className="socialButton"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="mailto:leoolieller@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="socialButton"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://github.com/devellernmr"
              target="_blank"
              rel="noopener noreferrer"
              className="socialButton"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contacts;
