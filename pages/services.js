import React from "react";
import Head from "next/head";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import ServiceIconBoxTwo from "../container/service/ServiceIconBoxTwo";
import ServiceSkill from "../container/service/ServiceSkill";
import AboutSix from "../container/About/AboutSix";
import ContactInformationThree from "../container/ContactInformation/ContactInformationThree";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import headerBg from "../public/images/bg/snippet-breadcrumb-bg-studio.jpg";

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
        <Header />
        <Breadcrumb
          image={headerBg.src}
          title="We think first and then we act"
          content="Home"
          contentTwo="Services"
        />
        <ServiceIconBoxTwo />
        <ServiceSkill />
        <AboutSix />
        <ContactInformationThree />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
};

export default Service;
