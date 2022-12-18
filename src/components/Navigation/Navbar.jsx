import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between navbar">
      <Link to="/Histoire">Notre histoire</Link>
      <Link to="/Produits">Nos Produits</Link>
      <Link to="/Soutien">Nous soutenir</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
