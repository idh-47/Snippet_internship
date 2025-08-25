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
//data imports
import contactDataTwo from "../data/contactInfo/contactInfoTwo.json";
import FooterData from "../data/Footer/footerItem.json";

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
          title="We are a digital agency located in Casablanca"
          content="Home"
          contentTwo="About Us"
        />
        <AboutFour
          subTitle="We are technology and digital partner"
          title="We think strategy, craft design, develop digital and create motion."
          desc="We partner with ambitious companies, brands, and founders to
                build solutions that truly transform businesses and connect
                meaningfully to the people that use them.
                We love what we do, the business challenges we get to
                work on, and the people we get to work with."
          miniTitle1="Our Mission"
          minidesc="Our team is dedicated to delivering cost-effective,
                      functional, user-centric, and innovative technical
                      solutions that transform our customer's digital
                      experiences."
          miniTitle2="Our Vision"
          minidesc2=" We believe in empowering software engineers and clients
                      who are driven to innovate in their niche. Our vision is
                      to provide world-class technology services that help our
                      clients unleash their full potential."
        />
        <Divider title="We are responsive, reliable, and dedicated to delivering the best possible results.." />
        <AboutFive
          classOption="bg-color-1"
          subTitle="Your needs, your budget, our expertise"
          title="We help startups, small and big companies"
          desc="Our team of expert designers, developers, and strategists are
                dedicated to delivering innovative and effective digital
                solutions that drive success."
          miniTitle1="User-Centric Approach"
          minidesc="When developing MVPs for startups, we prioritize the needs
                      and expectations of end-users. By conducting continuous
                      user testing and incorporating feedback, we ensure that
                      the final product accurately meets the needs of its
                      intended audience."
          miniTitle2="Business Thinking"
          minidesc2="We’ve worked on our own startups, so we know your
                      struggle. We want to be your partner and take a look at
                      your product from the business perspective. There’s a lot
                      more to startups than just technology and we are eager to
                      embrace it."
        />
        <CallToActionTwo
          title="Ready to take the next step and bring your digital project to life?"
          subTitle="Our team of expert designers, developers, and creatives are passionate about their work and love helping our clients succeed."
          btnText="Contact Us"
        />
        <ContactInformationThree
          subTitle="Moroccan Agency with a Global Reach"
          title="Our digital agency is located in the vibrant city of Casablanca"
          data={contactDataTwo}
          title2="We’d love to hear about your project"
          subTitle2="We make it simple for clients to connect with us and get their solutions implemented"
        />
        <Footer data={FooterData} />
        <ScrollToTop />
      </main>
    </>
  );
};

export default AboutUs;
