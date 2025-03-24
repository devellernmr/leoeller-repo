import "./projects.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "/public/img/exemple-site-1.jpeg"
import image2 from "/public/img/exemple-site-2.jpeg"
import image3 from "/public/img/exemple-site-3.jpeg"


const Projetos = () => {
  const projetos = [
    {
      id: 1,
      nome: "Landing Page Curso",
      descricao: "Um site de vendas com design responsivo e animações.",
      link: "https://devellernmr.github.io/portifolio_curso/",
      imagem: image1, 
    },
    {
      id: 2,
      nome: "Portfólio Pessoal",
      descricao: "Um site para mostrar meus trabalhos e projetos.",
      link: "https://devellernmr.github.io/ExempleRepository-2/",
      imagem: image2, 
    },
    {
      id: 3,
      nome: "Landing Page Produto",
      descricao: "Uma página de captura para promoção de um produto.",
      link: "https://devellernmr.github.io/CidaCunhaServir/",
      imagem: image3, 
    },

  ];

  return (
    <section className="projetosSection" id="projects">
      <div className="containerDivProjetos">
        <div className="projetos-header">
          <h2>Meus Projetos</h2>
          <p>Veja alguns dos sites incríveis que já desenvolvi!</p>
        </div>
        <div className="projetos-grid">
          {projetos.map((projeto) => (
            <div className="projeto-card" key={projeto.id}>
              <img
                src={projeto.imagem}
                alt={projeto.nome}
                className="projeto-imagem"
              />
              <div className="projeto-info">
                <h3>{projeto.nome}</h3>
                <p>{projeto.descricao}</p>
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projeto-link"
                >
                  Ver Projeto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
