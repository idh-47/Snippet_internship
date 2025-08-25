import React from "react";
import Head from "next/head";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import AboutFour from "../container/About/AboutFour";
import Divider from "../container/Dividers/Divider";
import AboutFive from "../container/About/AboutFive";
import CallToActionTwo from "../container/CallToAction/CallToActionTwo";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import headerBg from "../public/images/bg/snippet-breadcrumb-bg-studio.jpg";
import ContactInformationThree from "../container/ContactInformation/ContactInformationThree.js";

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
        <Header />
        <Breadcrumb
          image={headerBg.src}
          title="We are a digital agency located in Casablanca"
          content="Home"
          contentTwo="About Us"
        />
        <AboutFour />
        <Divider />
        <AboutFive classOption="bg-color-1" />
        <CallToActionTwo />
        <ContactInformationThree />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
};

export default AboutUs;
