import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "../components/Home/LandingPage/Image";
import histoire from "../assets/histoire.png";
import antenne from "../assets/antenne.png";
import francetv from "../assets/francetv.png";
import bourbon from "../assets/bourbon.jpg";
import sodiac from "../assets/sodiac.jpg";
import ur from "../assets/ur.jpg";
import iae from "../assets/iae.jpeg";
import croix from "../assets/croix.jpg";
import croec from "../assets/CROEC.png";
import villa from "../assets/villa.jpg";
import brgm from "../assets/brgm.jpg";
import tribunal from "../assets/tribunal.jpg";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div onDragStart={handleDragStart} className="confiance">
      <img src={antenne} alt="antenne" />
      <p>Antenne Réunion</p>
    </div>,
    <div onDragStart={handleDragStart} className="confiance">
      <img src={francetv} alt="france tv" />
      <p>France TV</p>
    </div>,
    <div onDragStart={handleDragStart} className="confiance">
      <img src={bourbon} alt="bourbon" />
      <p>Brasseries de Bourbon</p>
    </div>,
    <div onDragStart={handleDragStart} className="confiance">
      <img src={sodiac} alt="sodiac" />
      <p>Sodiac</p>
    </div>,
    <div onDragStart={handleDragStart} className="confiance">
      <img src={ur} alt="Université de la reunion" />
      <p>Université de La Réunion</p>
    </div>,
    <div onDragStart={handleDragStart} className="confiance">
      <img src={iae} alt="IAE Réunion" />
      <p>IAE Réunion</p>
    </div>,
    <div onDragStart={handleDragStart} className="confiance">
      <img src={croix} alt="croix rouge Réunion" />
      <p>La croix rouge Réunion</p>
    </div>,
    <div onDragStart={handleDragStart} className="confiance">
      <img src={croec} alt="CROEC" />
      <p>CROEC</p>
    </div>,
    <div onDragStart={handleDragStart} className="confiance">
      <img src={villa} alt="villa riviere" />
      <p>Villa Rivière</p>
    </div>,
    <div onDragStart={handleDragStart} className="confiance">
      <img src={brgm} alt="brgm" />
      <p>BRGM</p>
    </div>,
    <div onDragStart={handleDragStart} className="confiance">
      <img src={tribunal} alt="tribunal administratif de la Réunion" />
      <p>Tribunal administratif</p>
    </div>,
  ];

  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 6 },
  };
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
        <h3>Les Pâtissières ?</h3>
        <div>
          <img
            src={histoire}
            alt="Deux pâtissières souriantes tenant des spécialités locales"
          />
          <article>
            <h4>C'est d'abord un lieu de délicatesse !</h4>
            <p>
              Difficile de résister aux formes généreuses du Panier de choux
              craquelin remplis d'une crème légère à la vanille Bourbon, de ne
              pas craquer pour le croustillant du Royal Dakatine…
            </p>
            <p>
              Et vous ne pourrez pas quitter les lieux sans emporter « LA »
              fameuse Tarte Passion Meringuée dont tous raffolent !
            </p>
          </article>
        </div>
        <Link to="/Produits">
          <button type="button" className="button_style">
            Découvrir les saveurs péi
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
        <h3>Ils se sont déjà régalés avec nos saveurs péi</h3>
        <div>
          <div className="carou">
            <AliceCarousel
              mouseTracking
              items={items}
              disableDotsControls
              disableButtonsControls
              infinite
              autoPlay
              autoPlayInterval={1000}
              responsive={responsive}
              animationDuration="6000"
              transitionDuration="linear"
            />
          </div>

          <article>
            <h4>Il était une fois la gourmandise à La Réunion !</h4>
            <p>
              Je suis Mamy Rabenjamina : malgache (mon prénom « Mamy » signifie
              « Sucrée » en malgache), passionnée par les saveurs, sucrées bien
              sûr, mais aussi salées.
            </p>
            <p>
              Je suis Mamy Rabenjamina : malgache (mon prénom « Mamy » signifie
              « Sucrée » en malgache), passionnée par les saveurs, sucrées bien
              sûr, mais aussi salées.
            </p>
            <p>
              C&#39;est à l&#39;Afpa Réunion, auprès d&#39;Eric Lecerf, que
              j&#39;ai appris les bases de la pâtisserie française, qui, une
              fois maîtrisées, permettent toutes les variations.
            </p>
            <p>
              Et en créant Les Pâtissières, j&#39;ai conjugué tous ces
              apprentissages : le goût et l&#39;envie de l&#39;excellence, les
              variations...
            </p>
            <p>
              Et la gamme des Gâteaux gourmands aux saveurs péi est née, et
              continue à s&#39;étoffer !
            </p>
            <p>
              Plus de 10 ans d&#39;expérience et mon envie reste intacte.
              L&#39;univers des gâteaux et des plats salés se réinvente sans
              cesse, sans fin.
            </p>
          </article>
        </div>

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
      </section>
      <section className="histoire chance_home">
        <h3>Les Pâtissières à Saint-Denis ?</h3>

        <div>
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freunionla1ere%2Fvideos%2F474901498102657%2F&show_text=false&width=560&t=0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="patissieres"
          />
          <article>
            <p>Ce sont des gâteaux et des plats gourmands aux saveurs péi.</p>
            <p>
              C&#39;est la pâtisserie fine française tropicalisée et créolisée
              avec les matières premières locales et des traditions culinaires
              réunionnaises.
            </p>
            <p>
              Ce sont les fruits, légumes et épices de La Réunion que je
              transforme en entremets, tartes, quiches et tourtes, pour le
              plaisir de nos papilles, et pour ma contribution au développement
              local.
            </p>
            <p>
              Notre établissement est engagé dans la lutte contre le gaspillage
              alimentaire.
            </p>
            <p>
              « Réduire le gaspillage alimentaire est la troisième solution pour
              inverser le réchauffement climatique.» Chad Frischmann, Expert du
              Changement Climatique
            </p>
            <p>
              Mangez végétarien de temps en temps pour préserver la planèten !
            </p>
            <p>Mangez réunionnais pour préserver et enrichir le territoire !</p>
            <p>Régalez-vous de saveurs péi avec Les Pâtissières !</p>
            <p>
              Retrouvez vos prochains bonheurs saveurs péi sucrés ou salés sur
              les réseaux
            </p>
          </article>
        </div>

        <Link to="/Contact">
          <button type="button" className="button_style">
            Nous retrouver
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
