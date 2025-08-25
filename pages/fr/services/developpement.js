import { useState, useEffect, useRef } from "react";
import React from "react";
import Head from "next/head";
import Tilt from "react-parallax-tilt";
import NextImage from "next/image";
import Parallax from "parallax-js";

// Components
import Header from "../../../partials/header/Header.jsx";
import SectionTitleTwo from "../../../components/SectionTitles/SectionTitleTwo";
import Breadcrumb from "../../../container/Breadcrumb/Breadcrumb";
import CallToActionTwo from "../../../container/CallToAction/CallToActionTwo";
import Footer from "../../../container/Footer/Footer";
import ScrollToTop from "../../../components/ScrollToTop.jsx";
import headerBg from "../../../public/images/bg/snippet-breadcrumb-bg-studio.jpg";
import SectionTitle from "../../../components/SectionTitles/SectionTitle.jsx";
import dividerBg from "../../../public/images/bg/snippet-breadcrumb-bg-service.jpg";
import DevelopmentFaq from "../../../container/Faq/DevelopmentFaq.js";
import ContactInformationThree from "../../../container/ContactInformation/ContactInformationThree.js";

//data imports
import FooterDatafr from "../../../data/Footer/footerItem-fr.json";
import contactDataTwofr from "../../../data/contactInfo/contactInfoTwo-fr.json";

const DevelopmentPage = () => {
  const [didViewCountUp, setDidViewCountUp] = useState(false);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  };
  const [scale] = useState(1.04);
  const sceneEl = useRef(null);
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>
          Services de Développement Expert - Snippet - Construire vos solutions
          numériques
        </title>
        <meta
          name="description"
          content="Partenaire avec Snippet pour des services de développement expert. Notre équipe se spécialise dans le développement web, mobile et de logiciels personnalisés adaptés pour donner vie à votre vision."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <main>
        <Header
          home="Accueil"
          about="À Propos"
          services="Nos Services"
          consulting="Conseil"
          design="Design UX/UI"
          development="Développement"
          contact="Nous Contacter"
        />
        <Breadcrumb
          image={headerBg.src}
          title="Construire des solutions innovantes avec un développement de pointe"
          content="Services"
          contentTwo="Développement"
        />
        {/** Introduction Section */}
        <div className="section section-padding-top about-section-padding-bottom-200">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
                <div className="about-content-area whoweare-content mt-0 mb-md-10 mb-10">
                  <SectionTitleTwo
                    subTitle="Développement personnalisé pour votre succès numérique"
                    title="Créer la technologie de demain aujourd'hui"
                  />
                  <p>
                    Nos services de développement transforment les idées en
                    solutions numériques puissantes. Avec une expertise dans les
                    technologies modernes et les meilleures pratiques, nous
                    construisons des applications évolutives, sécurisées et
                    conviviales qui stimulent la croissance des entreprises et
                    offrent des expériences utilisateur exceptionnelles.
                  </p>
                  <p>
                    Des applications web aux applications mobiles et aux
                    solutions d entreprise, notre équipe de développement donne
                    vie à votre vision avec précision et innovation.
                  </p>
                </div>
              </div>

              <div
                className="col-xl-6 col-lg-6 col-12"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="about-image-area about-shape-animation right-0 me-0">
                  <div className="about-image philosophy js-tilt">
                    <Tilt scale={scale} transitionSpeed={4000}>
                      <NextImage
                        src="/images/services/snippet-digital-agency-development.jpg"
                        fill
                        alt="Développeurs Snippet travaillant sur des solutions numériques innovantes"
                      />
                    </Tilt>
                  </div>
                  <div className="about-image philosophy js-tilt">
                    <Tilt scale={scale} transitionSpeed={4000}>
                      <NextImage
                        src="/images/services/snippet-digital-agency-coding.jpg"
                        fill
                        alt="Code propre et pratiques de développement modernes chez Snippet"
                      />
                    </Tilt>
                  </div>
                  <div className="shape shape-1" id="scene" ref={sceneEl}>
                    <span data-depth="1">
                      <NextImage
                        src="/images/shape-animation/video-shape-1.png"
                        fill
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** Divider */}
        <div
          className="video-section section section-padding overlay-two"
          style={{ backgroundImage: `url(${dividerBg.src})` }}
        >
          <div className="container text-center">
            <div className="section-title color-light text-center">
              <h2 className="title"></h2>
            </div>
            <SectionTitle
              titleOption="color-light text-center"
              title="Alimenté par l'innovation, construit avec précision, et livré avec excellence"
            />
          </div>

          <div className="shape shape-1" id="scene" ref={sceneEl}>
            <span data-depth="1">
              <NextImage
                src="/images/shape-animation/newsletter-shape.png"
                fill
                alt=""
              />
            </span>
          </div>
        </div>

        {/** Development Details Section */}
        <div className="section section-padding-top section-padding-bottom-180">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                <div className="about-image-area">
                  <div className="about-image startup1">
                    <Tilt scale={scale} transitionSpeed={4000}>
                      <NextImage
                        src="/images/services/snippet-digital-agency-web-development.jpg"
                        fill
                        alt="Équipe Snippet développant des applications web réactives"
                      />
                    </Tilt>
                  </div>
                  <div className="about-image startup2">
                    <Tilt scale={scale} transitionSpeed={4000}>
                      <NextImage
                        src="/images/services/snippet-digital-agency-mobile-development.jpg"
                        fill
                        alt="Développement et test d'applications mobiles chez Snippet"
                      />
                    </Tilt>
                  </div>

                  <div className="shape shape-1" id="scene" ref={sceneEl}>
                    <span data-depth="1">
                      <NextImage
                        src="/images/shape-animation/about-shape-1.png"
                        fill
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-5 col-lg-6 col-12"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="about-content-area whychoose-content">
                  <SectionTitleTwo
                    subTitle="Notre expertise en développement"
                    title="Ingénierie de solutions pour un avenir meilleur"
                  />
                  <p>
                    Notre approche de développement couvre tous les aspects de
                    la création de logiciels modernes :
                  </p>
                  <ul className="agency-list">
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">
                        Développement d Applications Web
                      </div>
                    </li>
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">
                        Développement d Applications Mobiles
                      </div>
                    </li>
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">
                        Intégration et Développement d API
                      </div>
                    </li>
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">
                        Solutions Logicielles Personnalisées
                      </div>
                    </li>
                  </ul>
                  <p>
                    Chaque projet est construit en gardant à l esprit l
                    évolutivité, la sécurité et les performances, garantissant
                    que votre solution grandit avec les besoins de votre
                    entreprise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** FAQ Section */}
        <DevelopmentFaq
          subTitle="FAQ sur le Développement"
          title="Réponses à quelques questions sur notre processus de développement"
          question1="Quels types de projets de développement Snippet gère-t-il ?"
          response1="Nous gérons une large gamme de projets, incluant le développement web, mobile et de logiciels personnalisés adaptés à vos besoins."
          question2="Comment Snippet assure-t-il la qualité du code et la sécurité ?"
          response2="Nous implémentons les meilleures pratiques de l'industrie, effectuons des revues de code régulières et réalisons des tests rigoureux pour maintenir des standards élevés."
          question3="Pouvez-vous intégrer avec les systèmes et plateformes existants ?"
          response3="Oui, nous nous spécialisons dans les intégrations d'API transparentes et pouvons travailler avec des systèmes hérités."
          question4="Offrez-vous un support continu après le lancement du projet ?"
          response4="Absolument. Nous fournissons des services de maintenance et de support pour assurer des performances continues et des mises à jour."
          question5="Combien de temps dure un projet de développement typique ?"
          response5="Nous travaillons en sprints Agile, permettant la flexibilité et le progrès itératif. Les délais de projet varient selon la complexité, mais nous collaborons étroitement avec vous pour définir les étapes et les livrables."
        />
        <CallToActionTwo
          title="Prêt à donner vie à votre projet de développement ?"
          subTitle="Notre équipe d'experts développeurs et ingénieurs sont passionnés par la création de solutions innovantes qui font avancer votre entreprise."
          btnText="Nous Contacter"
        />
        <ContactInformationThree
          subTitle="Agence Marocaine avec une portée mondiale"
          title="Notre agence numérique est située dans la ville dynamique de Casablanca"
          data={contactDataTwofr}
          title2="Nous aimerions entendre parler de votre projet"
          subTitle2="Nous rendons simple pour les clients de se connecter avec nous et d'implémenter leurs solutions"
        />
        <Footer data={FooterDatafr} />
        <ScrollToTop />
      </main>
    </>
  );
};

export default DevelopmentPage;
