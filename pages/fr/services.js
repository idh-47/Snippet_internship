import React from "react";
import Head from "next/head";
import Header from "../../partials/header/Header";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb";
import ServiceIconBoxTwo from "../../container/service/ServiceIconBoxTwo";
import ServiceSkill from "../../container/service/ServiceSkill";
import AboutSix from "../../container/About/AboutSix";
import ContactInformationThree from "../../container/ContactInformation/ContactInformationThree";
import Footer from "../../container/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop.jsx";
import headerBg from "../../public/images/bg/snippet-breadcrumb-bg-studio.jpg";

//data imports
import IconBoxDatafr from "../../data/iconBox/icon-box-fr.json";
import contactDataTwofr from "../../data/contactInfo/contactInfoTwo-fr.json";
import FooterDatafr from "../../data/Footer/footeritem-fr.json";

const Service = () => {
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
          title="Nous réfléchissons d'abord, puis nous agissons"
          content="Accueil"
          contentTwo="Services"
        />
        <ServiceIconBoxTwo
          title="Construire un meilleur environnement de travail grâce aux services technologiques"
          subTitle="Nous sommes spécialisés dans la création, la connexion et la mise à l'échelle de technologies qui simplifient et améliorent la façon dont les gens travaillent et interagissent."
          data={IconBoxDatafr}
        />
        <ServiceSkill
          subTitle="Votre réussite est notre motivation"
          title="Nous sommes passionnés par l'utilisation de la technologie pour résoudre les problèmes et créer de la valeur"
          website="Sites web"
          ecommerce="E-commerce"
          webMobileApps="Applications web et mobiles"
          apiIntegrations="Intégrations API et tierces"
          devops="DevOps"
        />
        <AboutSix
          subTitle="Processus simple et axé sur le client"
          title="Nos workflows basés sur les principes Lean et le développement agile"
          desc="Nous sommes passionnés par notre métier, les défis commerciaux que nous relevons et nos collaborateurs. Notre processus unique se distingue par notre focalisation précoce sur la valeur et nos partenariats étroits. Nous prenons le temps de comprendre chaque produit et d'identifier les opportunités d'acquisition simplifiées, de générer de la valeur rapidement pour fidéliser les utilisateurs et de construire une infrastructure robuste pour une évolutivité optimale.
Nos workflows sont basés sur les principes Lean, les techniques de prototypage rapide et le développement agile, ce qui nous permet d'être rapides et flexibles pour offrir de la valeur à nos utilisateurs."
          btnText="Commencer"
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

export default Service;
