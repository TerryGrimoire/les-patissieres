import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

function Produits({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Produits </title>
        <link rel="canonical" href={`${helmet.href}/Produits`} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      <section className="produits">
        <h2>Voir la carte </h2>
        <iframe
          src="//v.calameo.com/?bkcode=0064827509bbbe87fc933"
          frameBorder="0"
          scrolling="no"
          allowtransparency
          allowFullScreen
          title="produits"
        />
      </section>
    </div>
  );
}

export default Produits;
