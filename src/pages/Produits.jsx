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
    </div>
  );
}

export default Produits;
