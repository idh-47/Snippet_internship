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

//data imports
import IconBoxData from "../data/iconBox/icon-box.json";
import contactDataTwo from "../data/contactInfo/contactInfoTwo.json";
import Footerdata from "../data/Footer/footerItem.json";

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
          title="We think first and then we act"
          content="Home"
          contentTwo="Services"
        />
        <ServiceIconBoxTwo
          title="Building a Better Workplace with Technology Services"
          subTitle="We specialize in building, connecting, and scaling technology in a way that simplifies and enhances the way people work and interact."
          data={IconBoxData}
        />
        <ServiceSkill
          subTitle="Your success is our motivation"
          title="We are passionate about using technology to solve problems and create value"
          website="Websites"
          ecommerce="E-Commerce"
          webMobileApps="Web & Mobile Apps"
          apiIntegrations="API & 3rd Party Integrations"
          devops="DevOps"
        />
        <AboutSix
          subTitle="Process simple and Customer-focused"
          title="Our Workflows Based on Lean Principles and Agile Development"
          desc="We are passionate about what we do, the
                business challenges we tackle, and the people we work
                with.Our unique process stands out due to our early focus on
                value and close partnerships. We take the time to
                understand each product and identify opportunities for
                easy acquisition flows, generate value early to retain users,
                and build a strong infrastructure for scalability.
                 Our workflows are based on lean principles, rapid
                prototyping techniques, and agile development,
                which allows us to be fast and flexible in delivering
                value to our users."
          btnText="Get started"
        />
        <ContactInformationThree
          subTitle="Moroccan Agency with a Global Reach"
          title="Our digital agency is located in the vibrant city of Casablanca"
          data={contactDataTwo}
          title2="We’d love to hear about your project"
          subTitle2="We make it simple for clients to connect with us and get their solutions implemented"
        />
        <Footer data={Footerdata} />
        <ScrollToTop />
      </main>
    </>
  );
};

export default Service;
