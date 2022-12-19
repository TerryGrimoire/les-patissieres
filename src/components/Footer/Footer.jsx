import React from "react";
import { Link } from "react-router-dom";

import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import grimoirenumerique from "../../assets/grimoirenumerique.png";
import terrygrimoire from "../../assets/terrygrimoire.jpg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_plan">
        <h4>Liens utiles</h4>
        <ul className="flex-col justify-evenly align-start">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/Produits">Nos Pâtisseries</Link>
          </li>
          <li>
            <Link to="/Soutien">Nous soutenir</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Mentions">Mentions Légales</Link>
          </li>
          <li>
            <Link to="/Mentions">Politique de confidentialité</Link>
          </li>
        </ul>
      </div>
      <div className="footer_contact">
        <h4>Retrouvez nous sur les réseaux</h4>

        <ul className="socialMedia_container">
          <li>
            <a href="https://www.facebook.com/lespatissieres.re/?ref=page_internal">
              <img src={facebook} alt="logo de Facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/lespatissieres.reunion/">
              <img src={instagram} alt="logo de Instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mamy-rabenjamina-82351714a/">
              <img src={linkedin} alt="logo de Linkedin" />
            </a>
          </li>
        </ul>
      </div>
      <div className="mentions_obligatoires">
        <h4>Financement et Conception</h4>
        <small>
          Ce site a été designé et développé par le{" "}
          <a
            href="https://www.grimoire-numerique.re"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <strong>Grimoire Numérique</strong>
          </a>
          . Il a été offert comme cadeau de noël 2022 afin d'aider Les
          Pâtissières à gagner en visibilité et surmonter cette période
          difficile.
        </small>
        <a
          href="https://www.grimoire-numerique.re"
          target="_blank"
          rel="noreferrer"
        >
          <ul className="flex align-center justify-start">
            <li>
              <img src={grimoirenumerique} alt="logo de Facebook" />
            </li>
            <li>
              <img
                src={terrygrimoire}
                alt="logo de Tiktok"
                className="tiktok"
              />
            </li>
          </ul>
        </a>
      </div>
      <div className="footer_bottom">
        <small>Tous droits réservés 2022 ©</small>
      </div>
    </footer>
  );
}

export default Footer;
