import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="right">
          <div className="item">
            <img
              src="/assets/img/fmachines_logo_branca.png"
              alt=""
              width={"250px"}
            />
          </div>
          <div className="item">
            <div className="title">FUTURE MACHINES CO.</div>
            <span>contato@fmachines.com.br</span>
            <span>Rio de Janeiro, Brasil</span>
          </div>
          {/* <div className="item">
            <div className="title">Nossas Soluções</div>

            <div className="wrapp">
            </div>
          </div> */}
          <div className="item">
            <div className="title">Desenvolvimento Web</div>
            <span>Páginas Web</span>
            <span>Sites Institucionais</span>
            <span>Softwares sob Demanda</span>
            <span>Aplicativos Web e Mobile</span>
          </div>
          <div className="item">
            <div className="title">Dados e IA</div>
            <span>Análise de Dados e Negócios</span>
            <span>Inteligência Artificial e Machine Learning</span>
          </div>
          <div className="item">
            <div className="title">Robótica e Automação</div>
            <span>Projetos de Automação</span>
            <span>Desenvolvimento IoT</span>
          </div>

          
          <div className="item">
            <div className="title">Nossos Produtos</div>
            <span>iLinda - Sistema para Clínicas de Estética</span>
            <span>Brilho DMX - Controlador DMX Wi-Fi</span>
          </div>

          {/* <div className="item">
            <div className="title">Nossas Redes</div>
            <span>contato@fmachines.com.br</span>
            <span>Rio de Janeiro, Brasil</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
