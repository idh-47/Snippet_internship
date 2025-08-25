import React from "react";
import Head from "next/head";
import SEO from "../../components/SEO";
import Header from "../../partials/header/Header";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb";
import ContactInformation from "../../container/ContactInformation/ContactInformation";
import GoogleMap from "../../container/Map/GoogleMap";
import ContactFromContainer from "../../container/ContactFromContainer/ContactFromContainer";
import Footer from "../../container/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop.jsx";
import headerBg from "../../public/images/bg/snippet-breadcrumb-bg-casablanca.jpg";

//data imports
import contactDatafr from "../../data/contactInfo/contactinfo-fr.json";
import FooterDatafr from "../../data/Footer/footeritem-fr.json";

const Contact = () => {
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
          contact="Contact"
        />
        <Breadcrumb
          image={headerBg.src}
          title="Notre agence digitale est située dans la ville dynamique de Casablanca"
          content="Accueil"
          contentTwo="Contactez nous"
        />
        <ContactInformation
          title="CONTACTEZ-NOUS, VOUS NE SEREZ PAS DÉÇU"
          subTitle="N'hésitez pas à nous contacter ; nous serons ravis de discuter plus en détail de vos besoins et de vos objectifs. Contactez-nous dès aujourd'hui et engageons une conversation !"
          data={contactDatafr}
        />
        <GoogleMap />
        <Footer data={FooterDatafr} />
        <ScrollToTop />
      </main>
    </>
  );
};

export default Contact;
