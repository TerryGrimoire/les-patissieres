import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import papa from "papaparse";

import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";

function Contact({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [infos, setInfos] = useState([]);

  const prepareData = (data) => {
    // j correspond aux lignes de A à ZZZ sur fichier Excel
    // index
    // line correspond à
    // index correspond à
    // key correspond à

    let obj = {};
    const json = data.map((line, index) => {
      if (index === 2) {
        data[0].forEach((key, j) => {
          if (key !== "") {
            obj = { ...obj, [key]: line[j] };
          }
        });
      }
      return obj;
    });

    json.shift();
    setInfos(json[1]);
  };

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQNiVoP7pAGKKmgJhi964b4IN4uWue-zOuGMYE0r3joChxy0zDcOk9BQE6z-2YkpDXDPwMx4dlC7a_U/pub?gid=0&single=true&output=csv"
    )
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data) => prepareData(data.data));
  }, []);

  console.log(infos);

  return (
    <div className="flex flex-col align-center">
      <Helmet>
        <title> {helmet.title} | Contact </title>
        <link rel="canonical" href={`${helmet.href}/Services`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <div className="contact_top">
        <h1>Nous joindre</h1>
        <div>
          <p>Par téléphone : {infos.Numéro}</p>
          <p>Par Email : {infos.Email}</p>
          <p>Nous retrouver : {infos.Adresse}</p>
          <iframe src={infos.Maps} title="iframe google maps" />
        </div>
      </div>
      <div className="contact_main">
        <h2>Nos horaires</h2>
        {
          /* Si l'entreprise ne ferme pas le midi */
          infos.Lundi20 === "" && <div>Ne ferme pas le midi</div>
        }

        {
          /* Si l'entreprise ferme le midi  */
          infos.Lundi20 !== "" && (
            <div>
              <div>
                Lundi :{" "}
                {infos.LundiO === "Fermé" && infos.Lundi2O === "Fermé"
                  ? infos.LundiO
                  : `${infos.LundiO} - ${infos.LundiF} | ${
                      infos.Lundi2O === "Fermé" && infos.Lundi2F === "Fermé"
                        ? "Fermé"
                        : `${infos.Lundi2O} - ${infos.Lundi2F}`
                    }`}
              </div>
              <div>
                Mardi :{" "}
                {infos.MardiO === "Fermé" && infos.Mardi2O === "Fermé"
                  ? infos.MardiO
                  : `${infos.MardiO} - ${infos.MardiF} | ${
                      infos.Mardi2O === "Fermé" && infos.Mardi2F === "Fermé"
                        ? "Fermé"
                        : `${infos.Mardi2O} - ${infos.Mardi2F}`
                    }`}
              </div>
              <div>
                Mercredi :{" "}
                {infos.MercrediO === "Fermé" && infos.Mercredi2O === "Fermé"
                  ? infos.MercrediO
                  : `${infos.MercrediO} - ${infos.MercrediF} | ${
                      infos.Mercredi2O === "Fermé" &&
                      infos.Mercredi2F === "Fermé"
                        ? "Fermé"
                        : `${infos.Mercredi2O} - ${infos.Mercredi2F}`
                    }`}
              </div>
              <div>
                Jeudi :{" "}
                {infos.JeudiO === "Fermé" && infos.Jeudi2O === "Fermé"
                  ? infos.JeudiO
                  : `${infos.JeudiO} - ${infos.JeudiF} | ${
                      infos.Jeudi2O === "Fermé" && infos.Jeudi2F === "Fermé"
                        ? "Fermé"
                        : `${infos.Jeudi2O} - ${infos.Jeudi2F}`
                    }`}
              </div>
              <div>
                Vendredi :{" "}
                {infos.VendrediO === "Fermé" && infos.Vendredi2O === "Fermé"
                  ? infos.VendrediO
                  : `${infos.VendrediO} - ${infos.VendrediF} | ${
                      infos.Vendredi2O === "Fermé" &&
                      infos.Vendredi2F === "Fermé"
                        ? "Fermé"
                        : `${infos.Vendredi2O} - ${infos.Vendredi2F}`
                    }`}
              </div>
              <div>
                Samedi :{" "}
                {infos.SamediO === "Fermé" && infos.Samedi2O === "Fermé"
                  ? infos.SamediO
                  : `${infos.SamediO} - ${infos.SamediF} | ${
                      infos.Samedi2O === "Fermé" && infos.Samedi2F === "Fermé"
                        ? "Fermé"
                        : `${infos.Samedi2O} - ${infos.Samedi2F}`
                    }`}
              </div>
              <div>
                Dimanche :{" "}
                {infos.DimancheO === "Fermé" && infos.Dimanche2O === "Fermé"
                  ? infos.DimancheO
                  : `${infos.DimancheO} - ${infos.DimancheF} | ${
                      infos.Dimanche2O === "Fermé" &&
                      infos.Dimanche2F === "Fermé"
                        ? "Fermé"
                        : `${infos.Dimanche2O} - ${infos.Dimanche2F}`
                    }`}
              </div>
            </div>
          )
        }
      </div>

      <div className="contact_bottom">
        <h3>Retrouvez nous sur les réseaux sociaux</h3>
        <ul className="socialMedia_container_contact">
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/lespatissieres.re/?ref=page_internal"
              rel="noreferrer"
            >
              <img src={facebook} alt="logo de Facebook" />
              <p>@lespatissieres.re</p>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/lespatissieres.reunion/"
              rel="noreferrer"
            >
              <img src={instagram} alt="logo de Instagram" />
              <p>@lespatissieres.reunion</p>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mamy-rabenjamina-82351714a/"
              rel="noreferrer"
            >
              <img src={linkedin} alt="logo de Linkedin" />
              <p>@mamy-rabenjamina-82351714a</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
