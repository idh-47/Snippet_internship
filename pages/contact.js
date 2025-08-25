import React from "react";
import Head from "next/head";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import ContactInformation from "../container/ContactInformation/ContactInformation";
import GoogleMap from "../container/Map/GoogleMap";
import ContactFromContainer from "../container/ContactFromContainer/ContactFromContainer";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import headerBg from "../public/images/bg/snippet-breadcrumb-bg-casablanca.jpg";

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
        <Header />
        <Breadcrumb
          image={headerBg.src}
          title="Our digital agency is located in the vibrant city of Casablanca"
          content="Home"
          contentTwo="Contact Us"
        />
        <ContactInformation />
        <GoogleMap />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
};

export default Contact;
