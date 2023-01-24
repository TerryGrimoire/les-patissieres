import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AliceCarousel from "react-alice-carousel";
import papa from "papaparse";
import "react-alice-carousel/lib/alice-carousel.css";

import fleche from "../assets/fleche.png";
import Menu1 from "../assets/Menu1.jpg";
import Menu2 from "../assets/Menu2.jpg";
import Menu3 from "../assets/Menu3.jpg";
import Menu4 from "../assets/Menu4.jpg";

function Produits({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [special, setSpecial] = useState([]);
  const menu = [Menu1, Menu2, Menu3, Menu4];
  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 2,
      itemsFit: "contain",
    },
  };
  const items = menu.map((el) => (
    <img
      src={el}
      onDragStart={handleDragStart}
      role="presentation"
      alt="presentation du menu"
      className="img_du_carousel"
    />
  ));

  const prepareData = (data) => {
    // j correspond aux lignes de A à ZZZ sur fichier Excel
    // index
    // line correspond à
    // index correspond à
    // key correspond à

    let obj = {};
    const json = data.map((line, index) => {
      if (index > 0 && index < 8) {
        data[0].forEach((key, j) => {
          obj = { ...obj, [key]: line[j] };
        });
      }
      return obj;
    });

    json.shift();
    setSpecial([...new Set(json)]);
  };

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQNiVoP7pAGKKmgJhi964b4IN4uWue-zOuGMYE0r3joChxy0zDcOk9BQE6z-2YkpDXDPwMx4dlC7a_U/pub?gid=749768856&single=true&output=csv"
    )
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data) => prepareData(data.data));
  }, []);

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
  const yyyy = today.getFullYear();

  today = `${yyyy}${mm}${dd}`;

  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Produits </title>
        <link rel="canonical" href={`${helmet.href}/Produits`} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      <section className="produits_top">
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
        <h1>Notre carte</h1>
        <p>
          Notre carte est régulièrement mise à jour car nos produits sont
          séléctionnés avec soin pour vous garantir des pâtisseries et repas de
          qualité.
        </p>
      </section>

      {special.length > 0 ? (
        <div className="produits_special">
          <h2>À la carte en ce moment</h2>
          <div className="special_container">
            {special
              .filter((el) => parseInt(el.Date, 10) >= parseInt(today, 10))
              .map((el) => (
                <div key={el.Plat}>
                  <div className="flex justify-between align-center">
                    <h4>{el.Plat}</h4> <strong>{el.Prix}</strong>
                  </div>
                  <p>{el.Description}</p>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="loading">
          <img
            src="https://i.giphy.com/media/IhDl4HVi26olRLZNu0/giphy.webp"
            alt="chargement en cours"
          />
        </div>
      )}

      <section className="produits">
        <h2>La carte permanente </h2>
        <AliceCarousel
          mouseTracking
          disableDotsControls
          items={items}
          responsive={responsive}
          keyboardNavigation
          renderPrevButton={() => {
            return (
              <div className="left arrow">
                <img src={fleche} alt="fleche gauche" />
              </div>
            );
          }}
          renderNextButton={() => {
            return (
              <div className="right arrow">
                <img src={fleche} alt="fleche droite" />
              </div>
            );
          }}
        />

        <Link to="/contact">
          <button type="button" className="button_style">
            Réserver maintenant
          </button>
        </Link>
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
      </section>
    </div>
  );
}

export default Produits;
