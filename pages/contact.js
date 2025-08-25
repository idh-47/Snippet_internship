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

//data imports
import contactData from "../data/contactInfo/contactInfo.json";
import FooterData from "../data/Footer/footerItem.json";

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
          home="Home"
          about="About Us"
          services="Our Services"
          consulting="Consulting"
          design="UX/UI Design"
          development="Development"
          contact="Contact Us"
        />
        <Breadcrumb
          image={headerBg.src}
          title="Our digital agency is located in the vibrant city of Casablanca"
          content="Home"
          contentTwo="Contact Us"
        />
        <ContactInformation
          title="CONTACT US, YOU WILL NOT BE DISAPPOINTED"
          subTitle="Don't hesitate to get in touch with us – we would be happy to discuss your needs and goals in more detail. Contact us today and let's start a conversation!"
          data={contactData}
        />
        <GoogleMap />
        <Footer data={FooterData} />
        <ScrollToTop />
      </main>
    </>
  );
};

export default Contact;
