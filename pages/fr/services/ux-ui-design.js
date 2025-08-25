import { useState, useEffect, useRef } from "react";
import React from "react";
import Head from "next/head";
import Tilt from "react-parallax-tilt";
import NextImage from "next/image";
import Parallax from "parallax-js";

// Components
import Header from "../../../partials/header/Header.jsx";
import SectionTitleTwo from "../../../components/SectionTitles/SectionTitleTwo.jsx";
import Breadcrumb from "../../../container/Breadcrumb/Breadcrumb.js";
import CallToActionTwo from "../../../container/CallToAction/CallToActionTwo.js";
import Footer from "../../../container/Footer/Footer.js";
import ScrollToTop from "../../../components/ScrollToTop.jsx";
import headerBg from "../../../public/images/bg/snippet-breadcrumb-bg-studio.jpg";
import SectionTitle from "../../../components/SectionTitles/SectionTitle.jsx";
import dividerBg from "../../../public/images/bg/snippet-ux-ui-design-divider-bg.jpg";
import UxUiDesignFaq from "../../../container/Faq/UxUiDesignFaq.js";
import ContactInformationThree from "../../../container/ContactInformation/ContactInformationThree.js";

//data imports
import FooterDatafr from "../../../data/Footer/footerItem-fr.json";
import contactDataTwofr from "../../../data/contactInfo/contactInfoTwo-fr.json";

const UxUiDesignPage = () => {
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
          Services de Design UX/UI Centrés sur l Utilisateur - Snippet -
          Accompagnement de votre parcours numérique
        </title>
        <meta
          name="description"
          content="Améliorez votre présence numérique avec les services de design UX/UI de Snippet. Nous créons des designs centrés sur l'utilisateur, visuellement attrayants et fonctionnels pour stimuler l'engagement et le succès."
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
          contact="Contact"
        />
        <Breadcrumb
          image={headerBg.src}
          title="Transformer les idées en interfaces magnifiques et conviviales"
          content="Services"
          contentTwo="Design UX/UI"
        />
        {/** Section Introduction */}
        <div className="section section-padding-top about-section-padding-bottom-200">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
                <div className="about-content-area whoweare-content mt-0 mb-md-10 mb-10">
                  <SectionTitleTwo
                    subTitle="Un design qui place l'utilisateur au centre"
                    title="Créer des designs engageants et centrés sur l'utilisateur pour le succès numérique"
                  />
                  <p>
                    Nos services de design UX/UI se concentrent sur la création
                    d expériences significatives et mémorables. Grâce à une
                    recherche approfondie, une planification stratégique et un
                    design intuitif, nous créons des interfaces qui résonnent
                    avec les utilisateurs et soutiennent vos objectifs
                    commerciaux.
                  </p>
                  <p>
                    Notre approche combine créativité et insights basés sur les
                    données pour créer des solutions qui engagent, inspirent et
                    performent.
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
                        src="/images/services/snippet-digital-agency-ux-ui-design.jpg"
                        fill
                        alt="Design d'interface centré sur l'utilisateur par Snippet pour des expériences numériques améliorées"
                      />
                    </Tilt>
                  </div>
                  <div className="about-image philosophy js-tilt">
                    <Tilt scale={scale} transitionSpeed={4000}>
                      <NextImage
                        src="/images/services/snippet-digital-agency-ux-ui-layout.jpg"
                        fill
                        alt="Wireframes UX intuitifs par Snippet pour améliorer l'engagement et l'utilisabilité"
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

        {/** Séparateur */}
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
              title="Concevoir avec empathie, construire avec un but"
            />
          </div>

          <div className="shape shape-1" id="scene" ref={sceneEl}>
            <span data-depth="1">
              <NextImage
                src="/images/shape-animation/newsletter-shape.png"
                fill
                alt="Snippet - Solutions de design accessibles et inclusives"
              />
            </span>
          </div>
        </div>

        {/** Section Détails du Design UX/UI */}
        <div className="section section-padding-top section-padding-bottom-180">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                <div className="about-image-area">
                  <div className="about-image startup1">
                    <Tilt scale={scale} transitionSpeed={4000}>
                      <NextImage
                        src="/images/services/snippet-digital-agency-ux-ui-design-prototyping.jpg"
                        fill
                        alt="Snippet - Test de prototypes et feedback pour une expérience utilisateur raffinée"
                      />
                    </Tilt>
                  </div>
                  <div className="about-image startup2">
                    <Tilt scale={scale} transitionSpeed={4000}>
                      <NextImage
                        src="/images/services/snippet-digital-agency-ux-ui-design-wireframing.jpg"
                        fill
                        alt="Snippet : design UX/UI personnalisé aligné avec l'identité de marque et les besoins utilisateurs"
                      />
                    </Tilt>
                  </div>

                  <div className="shape shape-1" id="scene" ref={sceneEl}>
                    <span data-depth="1">
                      <NextImage
                        src="/images/shape-animation/about-shape-1.png"
                        fill
                        alt="Solutions UX/UI responsives pour une interaction utilisateur fluide"
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
                    subTitle="Notre expertise en design UX/UI"
                    title="Du concept aux finitions"
                  />
                  <p>
                    Nous nous spécialisons dans la transformation d idées en
                    interfaces fonctionnelles et visuellement attrayantes qui s
                    alignent avec les attentes des utilisateurs et les objectifs
                    commerciaux.
                  </p>
                  <ul className="agency-list">
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">
                        Recherche Utilisateur & Personas
                      </div>
                    </li>
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">Wireframing & Prototypage</div>
                    </li>
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">Design d Interface & Visuel</div>
                    </li>
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">Tests d Utilisabilité</div>
                    </li>
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">Audits d Accessibilité</div>
                    </li>
                  </ul>
                  <p>
                    Notre équipe travaille à chaque étape du design, de la
                    recherche initiale aux raffinements finaux, assurant une
                    expérience utilisateur cohérente et engageante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** Section FAQ */}
        <UxUiDesignFaq
          subTitle="FAQ Design UX/UI"
          title="Tout ce que vous devez savoir sur notre processus de design"
          question1="Quelle est votre approche du design centré sur l'utilisateur ?"
          response1="Nous nous concentrons sur des méthodes centrées sur l'utilisateur et basées sur la recherche pour créer des interfaces intuitives et efficaces."
          question2="En quoi l'UX diffère-t-elle de l'UI dans vos services ?"
          response2="L'UX se concentre sur l'expérience globale, tandis que l'UI se concentre sur les éléments de design visuels et interactifs."
          question3="Pouvez-vous aider à améliorer le design d'un site web ou d'une app existante ?"
          response3="Absolument. Nous offrons des services de refonte qui améliorent à la fois l'utilisabilité et l'attrait esthétique."
          question4="Quels outils utilisez-vous pour le prototypage et le design ?"
          response4="Nous utilisons des outils leaders de l'industrie, comme Figma et Sketch, pour construire et tester nos designs."
          question5="Combien de temps prend un projet de design UX/UI typique ?"
          response5="Les délais varient, mais nous travaillons avec les clients pour établir des jalons clairs basés sur la complexité du projet."
        />
        <CallToActionTwo
          title="Prêt à transformer votre expérience numérique avec un design exceptionnel ?"
          subTitle="Notre équipe de designers UX/UI experts est passionnée par la création d'interfaces belles et fonctionnelles que les utilisateurs adorent et en qui les entreprises ont confiance."
          btnText="Nous Contacter"
        />
        <ContactInformationThree
          subTitle="Agence Marocaine avec une Portée Mondiale"
          title="Notre agence numérique est située dans la ville dynamique de Casablanca"
          data={contactDataTwofr}
          title2="Nous aimerions entendre parler de votre projet"
          subTitle2="Nous facilitons la connexion des clients avec nous et la mise en œuvre de leurs solutions"
        />
        <Footer data={FooterDatafr} />
        <ScrollToTop />
      </main>
    </>
  );
};

export default UxUiDesignPage;
