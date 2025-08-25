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
import ConsultingFaq from "../../../container/Faq/ConsultingFaq.js";
import ContactInformationThree from "../../../container/ContactInformation/ContactInformationThree.js";

//data imports
import FooterData from "../../../data/Footer/footeritem-fr.json";
import contactDataTwo from "../../../data/contactInfo/contactInfoTwo-fr.json";

const ConsultingPage = () => {
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
          Services de Conseil Digital Expert - Snippet - Alimenter votre
          parcours numérique
        </title>
        <meta
          name="description"
          content="Partenaire avec Snippet pour un conseil digital expert. Notre équipe se spécialise dans le développement de stratégies, l'optimisation des processus et les conseils technologiques adaptés pour stimuler la croissance de votre entreprise."
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
          title="Alimenter votre vision numérique avec notre conseil expert"
          content="Services"
          contentTwo="Conseil"
        />
        {/** Introduction Section */}
        <div className="section section-padding-top about-section-padding-bottom-200">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
                <div className="about-content-area whoweare-content mt-0 mb-md-10 mb-10">
                  <SectionTitleTwo
                    subTitle="Conseil stratégique pour votre croissance numérique"
                    title="Façonner le succès par l'insight et l'innovation"
                  />
                  <p>
                    Nos services de conseil se concentrent sur la transformation
                    des ambitions numériques en stratégies actionnables. Avec
                    une compréhension approfondie des tendances de l industrie
                    et des insights personnalisés, nous nous associons avec vous
                    pour débloquer de nouvelles opportunités, optimiser les
                    processus et construire une feuille de route numérique
                    résiliente.
                  </p>
                  <p>
                    De la stratégie numérique aux conseils technologiques, notre
                    expertise alimente votre vision et génère des résultats
                    impactants.
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
                        src="/images/services/snippet-digital-agency-strategy.jpg"
                        fill
                        alt="Consultants Snippet discutant des solutions de stratégie numérique"
                      />
                    </Tilt>
                  </div>
                  <div className="about-image philosophy js-tilt">
                    <Tilt scale={scale} transitionSpeed={4000}>
                      <NextImage
                        src="/images/services/snippet-digital-agency-strategy-consulting.jpg"
                        fill
                        alt="Une feuille de route stratégique pour la croissance numérique par le conseil Snippet"
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
              title="Animé par l'insight, axé sur l'innovation, et engagé envers votre succès"
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

        {/** Consulting Details Section */}
        <div className="section section-padding-top section-padding-bottom-180">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                <div className="about-image-area">
                  <div className="about-image startup1">
                    <Tilt scale={scale} transitionSpeed={4000}>
                      <NextImage
                        src="/images/services/snippet-digital-agency-consutling-strategy.jpg"
                        fill
                        alt="Expert Snippet conseillant sur une pile technologique sur mesure"
                      />
                    </Tilt>
                  </div>
                  <div className="about-image startup2">
                    <Tilt scale={scale} transitionSpeed={4000}>
                      <NextImage
                        src="/images/services/snippet-digital-agency-consutling-prototyping.jpg"
                        fill
                        alt="Snippet se concentre sur la transformation des ambitions numériques en stratégies actionnables"
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
                    subTitle="Notre expertise en conseil"
                    title="Guider chaque étape de votre parcours numérique"
                  />
                  <p>
                    Notre approche de conseil aborde les domaines clés qui
                    façonnent le succès numérique :
                  </p>
                  <ul className="agency-list">
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">
                        Planification de stratégie numérique
                      </div>
                    </li>
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">Analyse d entreprise</div>
                    </li>
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">
                        Recommandations de pile technologique
                      </div>
                    </li>
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">Optimisation des processus</div>
                    </li>
                  </ul>
                  <p>
                    Chaque service est conçu pour soutenir vos objectifs
                    uniques, vous aidant à prendre des décisions éclairées qui
                    mènent à une croissance soutenue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** FAQ Section */}
        <ConsultingFaq
          subTitle="FAQ sur le Conseil"
          title="Répondre à vos questions sur la stratégie numérique et le conseil"
          question1="Quels types d'entreprises bénéficient du conseil ?"
          response1="Le conseil peut bénéficier à toute entreprise cherchant à améliorer sa
                    présence numérique, rationaliser les processus ou développer une
                    feuille de route stratégique pour la croissance."
          question2="Comment fonctionne le processus de conseil ?"
          response2="Nous commençons par une évaluation approfondie de vos besoins, puis
                     fournissons des recommandations et stratégies sur mesure alignées
                     avec vos objectifs."
          question3="Puis-je obtenir de l'aide pour un projet spécifique, ou fournissez-vous
                     un conseil continu ?"
          response3="Nous offrons à la fois du conseil de projet ponctuel et des services
                     consultatifs continus pour soutenir la croissance continue."
        />
        <CallToActionTwo
          title="Prêt à franchir la prochaine étape et donner vie à votre projet numérique ?"
          subTitle="Notre équipe d'experts designers, développeurs et créatifs sont passionnés par leur travail et adorent aider nos clients à réussir."
          btnText="Nous Contacter"
        />
        <ContactInformationThree
          subTitle="Agence Marocaine avec une portée mondiale"
          title="Notre agence numérique est située dans la ville dynamique de Casablanca"
          data={contactDataTwo}
          title2="Nous aimerions entendre parler de votre projet"
          subTitle2="Nous rendons simple pour les clients de se connecter avec nous et d'implémenter leurs solutions"
        />
        <Footer data={FooterData} />
        <ScrollToTop />
      </main>
    </>
  );
};

export default ConsultingPage;
