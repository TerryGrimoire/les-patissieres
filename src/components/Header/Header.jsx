import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import papa from "papaparse";
import Nav from "../Navigation/Nav";
import Navbar from "../Navigation/Navbar";
import burger from "../../assets/menu.png";
import logo from "../../assets/logo.png";

function Burger({ helmet }) {
  const [openBurger, setOpenBurger] = useState(false);
  const [appData, setAppData] = useState(false);

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
          if (line[j] !== "NON") {
            switch (key) {
              case "Message":
                obj = { ...obj, [key]: line[j] };
                break;
              case "Debut":
                obj = { ...obj, [key]: line[j] };
                break;
              case "Fin":
                obj = { ...obj, [key]: line[j] };
                break;
              case "Ferme":
                obj = { ...obj, [key]: line[j] };
                break;
              default:
              // do nothing
            }
          }
        });
      }
      return obj;
    });

    json.shift();
    setAppData(json[1]);
  };

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQNiVoP7pAGKKmgJhi964b4IN4uWue-zOuGMYE0r3joChxy0zDcOk9BQE6z-2YkpDXDPwMx4dlC7a_U/pub?gid=0&single=true&output=csv"
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
    <header className="flex header justify-between align-center">
      <button
        type="button"
        onClick={() => setOpenBurger(!openBurger)}
        className="mobile no_button"
      >
        <img
          src={burger}
          alt="menu de navigation sur le site internet - trois lignes de navigation"
          className="burger"
        />
      </button>
      <Link to="/">
        <img src={logo} alt={`logo de ${helmet.title}`} className="logo" />
      </Link>
      {openBurger && <Nav setOpenBurger={setOpenBurger} />}
      <div className="desktop">
        <Navbar setOpenBurger={setOpenBurger} />
      </div>

      {appData.Message &&
        appData.Debut &&
        appData.Fin &&
        appData.Debut - 7 < today &&
        appData.Fin > today && (
          <div className="header_bandereau">
            <p>⚠️ {appData.Message}</p>
          </div>
        )}
    </header>
  );
}

export default Burger;
