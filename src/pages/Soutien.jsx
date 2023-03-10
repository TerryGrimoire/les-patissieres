import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import don from "../assets/don.webp";
import reseaux from "../assets/reseaux.webp";
import review from "../assets/review.webp";
import abonnement from "../assets/abonnement.webp";
import local from "../assets/local.gif";
import gossip from "../assets/gossip.gif";

function Soutien({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Soutien </title>
        <link rel="canonical" href={`${helmet.href}/Soutien`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <div className="soutien_container">
        <section className="soutien_top">
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
          <h1>Nous soutenir dans cette crise</h1>

          <p>
            Notre histoire s'est construite avec vous et perdure actuellement
            gr??ce ?? vous et votre mobilisation. En cela, Les p??tissi??res vous
            voue une reconnaissance sans ??gale. Notre combat n'est toujours pas
            fini et vous pouvez encore nous soutenir de plusieurs fa??ons.
          </p>

          <p>
            Pour plus d'informations, n'h??sitez pas ?? {"  "}
            <Link to="/Contact"> nous contacter</Link> par t??l??phone ou email.{" "}
          </p>
        </section>
        <section className="soutien_main">
          <article>
            <h2>SOUTIEN FINANCIER</h2>
            <div>
              <h3>Devenir actionnaire</h3>
              <img className="img_don" src={don} alt="gif montrant un don" />
              <p>
                Devenez co-propri??taire des P??tissi??res. Nous ouvrirons
                prochainement le capital social des P??tissi??res. Le mod??le
                actuel n'est pas viable et doit ??tre repens??. Je cherche donc
                les co-construteurs des P??tissi??res du futur, qui voudraient
                s'engager en argent, en id??es, en logistique, etc.
              </p>
            </div>

            <div>
              <h3>Souscrire ?? un abonnement</h3>
              <img
                className="img:_don"
                src={abonnement}
                alt="gif montrant un abonnement"
              />

              <p>
                Afin de pouvoir prouver aux juges que nous pouvons assurer une
                tr??sorerie r??guli??re, nous avons mis en place un syst??me
                d'abonnement. Ce sont donc 3 abonnements mensuels de 15???, 30??? et
                45???. Plus de d??tails tr??s prochainement concernant l'offre
                compl??te.
              </p>
            </div>
            <div>
              <h3>Commander pour vos f??tes</h3>
              <img
                className="img:_don"
                src={local}
                alt="gif montrant un abonnement"
              />

              <p>
                Favoriser une artisante p??tissi??re locale plut??t que la grande
                distribution, c'est non seulement un geste qui peut sauver une
                entreprise mais c'est aussi et surtout un geste solidaire. En
                consommant local, on contribue aussi ?? mettre en l'air La
                R??union et ses nombreux talents.
              </p>
            </div>
          </article>

          <article>
            <h2>SOUTIEN M??DIATHIQUE</h2>
            <div>
              <h3>Laisser un avis sur Google </h3>
              <img
                className="img_don"
                src={review}
                alt="gif montrant 5 ??toiles"
              />

              <p>
                Vous pouvez aussi nous soutenir <strong>gratuitement</strong> en
                nous aidant ?? gagner davantage en visibilit??. Cela peut se faire
                en laissant un avis, des photos ou des vid??os sur notre page
                {"   "}
                <a
                  href="https://goo.gl/maps/zYR4yxEPUfEU73VG9"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Entreprise
                </a>
                .
              </p>
            </div>

            <div>
              <h3>Nous suivre sur les r??seaux</h3>
              <img
                className="img:_don"
                src={reseaux}
                alt="gif montrant un t??l??phone sur les r??seaux sociaux avec plein de mentions j'aime"
              />

              <p>
                Vous pouvez ??galement nous suivre sur{"  "}
                <a
                  href="https://www.facebook.com/lespatissieres.re/?ref=page_internal"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
                ,{"  "}
                <a
                  href="https://www.linkedin.com/in/mamy-rabenjamina-82351714a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
                {"  "}
                et{"  "}
                <a
                  href="https://www.instagram.com/lespatissieres.reunion/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                . Chaque mention j'aime et follower nous permet de gagner en
                visibilit?? et nous rapproche un peu plus de la rentabilit??.
              </p>
            </div>
            <div className="img_gossip">
              <h3>Parler de nous autour de vous</h3>
              <img
                src={gossip}
                alt="gif montrant un t??l??phone sur les r??seaux sociaux avec plein de mentions j'aime"
              />

              <p>
                Enfin, parce que le bouche ?? oreille est un outil puissant. Vous
                pouvez tout simplement parler de nous ?? votre entourage, au
                bureau ou dans votre famille, pour nous aider ?? nous faire
                conna??tre davantage.
              </p>
            </div>
          </article>
        </section>
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
    </div>
  );
}

export default Soutien;
