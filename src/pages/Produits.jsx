import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Menu1 from "../assets/Menu1.jpg";
import Menu2 from "../assets/Menu2.jpg";
import Menu3 from "../assets/Menu3.jpg";
import Menu4 from "../assets/Menu4.jpg";
import Menu5 from "../assets/Menu5.jpg";
import Menu6 from "../assets/Menu6.jpg";
import Menu7 from "../assets/Menu7.jpg";
import Menu8 from "../assets/Menu8.jpg";
import Menu9 from "../assets/Menu9.jpg";
import Menu10 from "../assets/Menu10.jpg";

function Produits({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const menu = [
    Menu1,
    Menu2,
    Menu3,
    Menu4,
    Menu5,
    Menu6,
    Menu7,
    Menu8,
    Menu9,
    Menu10,
  ];
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
    />
  ));
  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Produits </title>
        <link rel="canonical" href={`${helmet.href}/Produits`} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      <section className="produits">
        <h2>Voir la carte </h2>
        <AliceCarousel
          mouseTracking
          disableDotsControls
          infinite
          keyboardNavigation="true"
          items={items}
          responsive={responsive}
        />
      </section>
    </div>
  );
}

export default Produits;
