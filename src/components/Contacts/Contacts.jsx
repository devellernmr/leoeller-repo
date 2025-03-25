import React, { useState } from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaGithub } from "react-icons/fa";
import "./contacts.css";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/mnnpzzkd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <section className="contactsSection" id="contacts">
      <div className="contactsWrapper">
        <div className="containerDivContacts">
          <div className="contacts-header">
            <h2>Contatos</h2>
          </div>
          <div className="divContacsForm">
            <form className="contacts-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Nome"
                className="contacts-input"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="contacts-input"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Mensagem"
                className="contacts-textarea"
                value={formData.message}
                onChange={handleChange}
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