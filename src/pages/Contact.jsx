import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import papa from "papaparse";

import email from "../assets/email.png";
import adresse from "../assets/pin.png";
import telephone from "../assets/telephone.png";
import mastercard from "../assets/mastercard.png";
import chequedej from "../assets/chequedej.png";
import visa from "../assets/visa.png";
import tickets from "../assets/tickets.png";

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
          if (line[j] === "Ouvert")
            obj = { ...obj, ouvert: { ...obj.ouvert, [key]: key } };
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

  return (
    <div className="flex flex-col align-center contact_main_container">
      <Helmet>
        <title> {helmet.title} | Contact </title>
        <link rel="canonical" href={`${helmet.href}/Services`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <div className="custom-shape-divider-top-1671378446">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          />
        </svg>
      </div>

      {infos.Numéro ? (
        <div className="contact_top">
          <h1>Nous joindre</h1>
          <div>
            <p>
              <img src={telephone} alt="telephone pour contact" />{" "}
              {infos.Numéro}
            </p>
            <p>
              <img src={email} alt="enveloppe avec signe @" /> {infos.Email}
            </p>
            <p>
              <img src={adresse} alt="pin de localisation sur une carte" />
              {infos.Adresse}
            </p>
          </div>
          <iframe src={infos.Maps} title="iframe google maps" />
        </div>
      ) : (
        <div className="loading">
          <img
            src="https://i.giphy.com/media/IhDl4HVi26olRLZNu0/giphy.webp"
            alt="chargement en cours"
          />
        </div>
      )}
      <section className="horaires_joursferies light_bg">
        <div className="contact_horaires light_bg">
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

        <div className="contact_feries light_bg">
          {infos.ouvert ? (
            <div>
              <h2> Jours fériés</h2>

              <p>
                Nous sommes fermés les jours fériés à l'exception des jours
                suivants :{" "}
              </p>

              <ul>
                {Object.keys(infos.ouvert).map((el) => (
                  <p className="contact_li" key={el}>
                    ▫️ {el}
                  </p>
                ))}
              </ul>
            </div>
          ) : (
            <p>Nous sommes fermés les jours fériés</p>
          )}
        </div>
      </section>
      <div className="contact_paiements">
        <h2>Paiement acceptés</h2>
        <div>
          {infos.Carte === "OUI" && <img src={visa} alt="paiement en carte" />}
          {infos.Carte === "OUI" && (
            <img src={mastercard} alt="paiement en carte" className="mc" />
          )}
          {infos.Tickets === "OUI" && (
            <img src={tickets} alt="paiement en tickets" />
          )}
          {infos.Tickets === "OUI" && (
            <img src={chequedej} alt="paiement en tickets" />
          )}
        </div>
      </div>

      <div className="custom-shape-divider-bottom-1671378180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          />
        </svg>
      </div>
    </div>
  );
}

export default Contact;
