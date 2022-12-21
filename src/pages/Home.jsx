import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Image from "../components/Home/LandingPage/Image";
import histoire from "../assets/histoire.png";
import soutien from "../assets/soutien.png";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="flex-col">
      <Helmet>
        <title> {helmet.title} | Accueil </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      {/*

        Options here :
        -  Main image Style - Landing page like Charles Portefolio (main image + title in the middle) 
        -  Main video Style - Landing page like Barber 902 (main vidéo + title in the middle)
        -  Animation  Style - Landing page like ASMK (main image animated + title in the middle)
 
        */}

      <Image title={helmet.title} />

      <section className="histoire">
        <div className="custom-shape-divider-top-1671378446 mobile">
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
        <h3>Notre histoire</h3>
        <div>
          <img
            src={histoire}
            alt="Deux pâtissières souriantes tenant des spécialités locales"
          />
          <article>
            <h4>La passion de la pâtisserie</h4>
            <p>
              Créée en 2012 par deux entrepreneuses passionnées, Les Pâtissières
              ont remporté de nombreux prix et distinctions grâce à leurs
              créations originales mêlant savoir-faire français et saveurs
              locales réunionnaises.
            </p>
            <p>
              La pandémie COVID-19 et le départ de son associée pour raisons
              médicales ont laissés Mamy, la gérante de la pâtisserie, en grande
              difficulté, frôlant de justesse la liquidation judiciaire. Mais sa
              détermination est sans faille et elle souhaite prouver que lorsque
              l'on fait les choses avec amour et passion, tout est possible et
              réalisable.
            </p>

            <p>
              Venez découvrir nos saveurs péi en version sucrée ou salée ainsi
              que nos plats végétariens aux épices et aromates locaux dans notre
              atelier du Bas de la Rivière.
            </p>
          </article>
        </div>
        <Link to="/Produits">
          <button type="button" className="button_style">
            Découvrir la carte
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

      <section className="histoire light soutien_home">
        <h3>Votre soutien</h3>
        <div>
          <img
            src={soutien}
            alt="Deux pâtissières souriantes tenant des spécialités locales"
          />
          <article>
            <h4>Merci pour votre soutien</h4>
            <p>
              Ces dernières années ont été difficiles pour nous, mais nous
              sommes toujours présentes et c'est entièrement grâce à vous. Nous
              sommes éternellement reconnaissantes envers nos clients pour leur
              mobilisation et leur soutien. C'est avec vous et pour vous que
              nous souhaitons continuer cette belle aventure.
            </p>
            <p>
              Le combat n'est pas fini et nous avons encore besoin de votre
              aide. Vous pouvez contribuer de votre côté (avec ou sans argent)
              et nous aider à remonter la pente. Cela peut se faire via un like,
              un partage ou en parlant de nous à votre entourage.
            </p>
          </article>
        </div>

        <Link to="/soutien">
          <button type="button" className="button_style">
            Soutenir Mamy ♥
          </button>
          <div className="custom-shape-divider-bottom-1671377551">
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
        </Link>
      </section>
      <section className="histoire chance_home">
        <h3>Dernière chance</h3>

        <div>
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freunionla1ere%2Fvideos%2F474901498102657%2F&show_text=false&width=560&t=0"
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="patissieres"
          />
          <article>
            <h4>La décision judiciaire est tombée</h4>
            <p>
              Nous sommes actuellement à un tournant décisif pour notre petite
              entreprise. Nous avons mis en place un système d'abonnement qui
              nous permettra de montrer au juge que nous sommes en mesure de
              générer un revenu régulier chaque mois. Plus de détails sont à
              venir sur le fonctionnement de cet abonnement. Si vous souhaitez
              vous abonner, n'hésitez pas à prendre contact avec nous.
            </p>
            <p>
              Tout abonnement ou commande doit se faire par email ou téléphone.
              Vous pouvez également nous contacter sur nos réseaux sociaux.
            </p>
          </article>
        </div>

        <Link to="/Contact">
          <button type="button" className="button_style">
            Nous contacter
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
    </main>
  );
}
