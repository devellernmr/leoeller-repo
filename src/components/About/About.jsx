import "./about.css";

const About = () => {
  return (
    <section className="aboutSection" id="about">
      <div className="containerDivAbout">
        <div className="textDivAbout">
          <h2>Sobre Mim</h2>
          <p>
            Olá, meu nome é Leonardo Eller , moro em Minas Geras -
            Brasil. Sou um
            programador Front-end a pouco mais de 7 meses, tenho me esforçado em
            aprender e estudar mais sobre a área prezando a minha evolução para
            utilizar melhores e mais capacitadas ferramentas para a criação de
            sites.{" "}
          </p>
        </div>
        <div className="cubosDivAbout">
          <div className="cuboDivAbout">
            <h3>Código</h3>
            <p>
            Estou aprimorando minhas habilidades em programação, utilizando linguagens como HTML, CSS e JavaScript para desenvolver soluções web interativas e modernas.
            </p>
          </div>
          <div className="cuboDivAbout">
            <h3>Design</h3>
            <p>
            Atuo de forma colaborativa em equipes multidisciplinares, contribuindo para a criação de layouts inovadores e interfaces de usuário intuitivas.
            </p>
          </div>
          <div className="cuboDivAbout">
            <h3>React</h3>
            <p>
            Utilizo o React para desenvolver interfaces responsivas, criando componentes reutilizáveis que garantem uma experiência de usuário moderna e escalável.
            </p>
          </div>
          
          </div>
      </div>
    </section>
  );
};

export default About;
