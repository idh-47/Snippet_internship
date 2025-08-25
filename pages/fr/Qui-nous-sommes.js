import React from "react";
import Head from "next/head";
import Header from "../../partials/header/Header";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb";
import AboutFour from "../../container/About/AboutFour";
import Divider from "../../container/Dividers/Divider";
import AboutFive from "../../container/About/AboutFive";
import CallToActionTwo from "../../container/CallToAction/CallToActionTwo";
import Footer from "../../container/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop.jsx";
import headerBg from "../../public/images/bg/snippet-breadcrumb-bg-studio.jpg";
import ContactInformationThree from "../../container/ContactInformation/ContactInformationThree.js";
//data imports
import contactDataTwofr from "../../data/contactInfo/contactInfoTwo-fr.json";
import FooterDatafr from "../../data/Footer/footeritem-fr.json";

const AboutUs = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Snippet - Empowering your digital journey</title>
        <meta
          name="description"
          content="Snippet - Empowering your digital journey"
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
          consulting="Consultation"
          design="Design UX/UI"
          development="Développement"
          contact="Nous Contacter"
        />
        <Breadcrumb
          image={headerBg.src}
          title="Nous sommes une agence digitale située à Casablanca"
          content="Accueil"
          contentTwo="À propos de nous"
        />
        <AboutFour
          subTitle="Nous sommes un partenaire technologique et numérique"
          title="Nous réfléchissons à la stratégie, concevons, développons le numérique et créons du mouvement."
          desc="Nous collaborons avec des entreprises, des marques et des fondateurs ambitieux pour créer des solutions qui transforment véritablement les entreprises et créent un lien significatif avec leurs utilisateurs.
Nous aimons ce que nous faisons, les défis commerciaux sur lesquels nous travaillons et les personnes avec lesquelles nous collaborons."
          miniTitle1="Notre mission"
          minidesc="Notre équipe se consacre à fournir des solutions techniques rentables, fonctionnelles, centrées sur l'utilisateur et innovantes qui transforment l'expérience numérique de nos clients."
          miniTitle2="Notre vision"
          minidesc2="Nous croyons qu'il faut donner aux ingénieurs logiciels et aux clients les moyens d'innover dans leur domaine. Notre vision est de fournir des services technologiques de classe mondiale qui aident nos clients à exploiter pleinement leur potentiel."
        />
        <Divider title="Nous sommes réactifs, fiables et déterminés à fournir les meilleurs résultats possibles.." />
        <AboutFive
          classOption="bg-color-1"
          subTitle="Vos besoins, votre budget, notre expertise"
          title="Nous aidons les startups, les petites et grandes entreprises"
          desc="Notre équipe de designers, développeurs et stratèges experts se consacre à la fourniture de solutions numériques innovantes et efficaces, gages de réussite."
          miniTitle1="Approche centrée sur l'utilisateur"
          minidesc="Lors du développement de MVP pour les startups, nous accordons la priorité aux besoins et aux attentes des utilisateurs finaux. En effectuant des tests utilisateurs continus et en intégrant les retours d'expérience, nous garantissons que le produit final répond parfaitement aux besoins du public cible."
          miniTitle2="Réflexion commerciale"
          minidesc2="Nous avons travaillé sur nos propres startups, nous connaissons donc vos difficultés. Nous souhaitons être votre partenaire et examiner votre produit d'un point de vue commercial. Les startups ne se limitent pas à la technologie, et nous sommes impatients de les adopter."
        />
        <CallToActionTwo
          title="Prêt à franchir une nouvelle étape et à donner vie à votre projet numérique ?"
          subTitle="Notre équipe de designers, développeurs et créatifs experts est passionnée par son travail et adore accompagner nos clients dans leur réussite."
          btnText="Contactez-nous"
        />
        <ContactInformationThree
          subTitle="Agence marocaine d'envergure mondiale"
          title="Notre agence digitale est située dans la ville dynamique de Casablanca"
          data={contactDataTwofr}
          title2="Nous aimerions en savoir plus sur votre projet"
          subTitle2="Nous facilitons la prise de contact et la mise en œuvre de nos solutions pour nos clients"
        />
        <Footer data={FooterDatafr} />
        <ScrollToTop />
      </main>
    </>
  );
};

export default AboutUs;
