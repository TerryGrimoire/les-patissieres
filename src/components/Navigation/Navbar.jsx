import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between navbar">
      <Link to="/">Accueil</Link>
      <Link to="/Produits">La carte</Link>
      <Link to="/Soutien">Nous soutenir</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
