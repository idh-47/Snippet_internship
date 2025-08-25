import { useState, useEffect, useRef } from "react";
import React from "react";
import Head from "next/head";
import Tilt from "react-parallax-tilt";
import NextImage from "next/image";
import Parallax from "parallax-js";

// Components
import Header from "../../partials/header/Header.jsx";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb";
import CallToActionTwo from "../../container/CallToAction/CallToActionTwo";
import Footer from "../../container/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop.jsx";
import headerBg from "../../public/images/bg/snippet-breadcrumb-bg-studio.jpg";
import SectionTitle from "../../components/SectionTitles/SectionTitle.jsx";
import dividerBg from "../../public/images/bg/snippet-breadcrumb-bg-service.jpg";
import ConsultingFaq from "../../container/Faq/ConsultingFaq.js";
import ContactInformationThree from "../../container/ContactInformation/ContactInformationThree.js";

//data imports
import FooterData from "../../data/Footer/footerItem.json";
import contactDataTwo from "../../data/contactInfo/contactInfoTwo.json";

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
          Expert Digital Consulting Services - Snippet - Empowering your digital
          journey
        </title>
        <meta
          name="description"
          content="Partner with Snippet for expert digital consulting. Our team specializes in strategy development, process optimization, and tech guidance tailored to drive your business growth."
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
          title="Empowering your digital vision with our expert consulting"
          content="Services"
          contentTwo="Consulting"
        />
        {/** Introduction Section */}
        <div className="section section-padding-top about-section-padding-bottom-200">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
                <div className="about-content-area whoweare-content mt-0 mb-md-10 mb-10">
                  <SectionTitleTwo
                    subTitle="Strategic consulting for your digital growth"
                    title="Shaping success through insight and innovation"
                  />
                  <p>
                    Our consulting services focus on transforming digital
                    ambitions into actionable strategies. With a deep
                    understanding of industry trends and tailored insights, we
                    partner with you to unlock new opportunities, optimize
                    processes, and build a resilient digital roadmap.
                  </p>
                  <p>
                    From digital strategy to tech guidance, our expertise
                    empowers your vision and drives impactful results.
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
                        alt="Snippet consultants discussing digital strategy solutions"
                      />
                    </Tilt>
                  </div>
                  <div className="about-image philosophy js-tilt">
                    <Tilt scale={scale} transitionSpeed={4000}>
                      <NextImage
                        src="/images/services/snippet-digital-agency-strategy-consulting.jpg"
                        fill
                        alt="A strategic roadmap for digital growth by Snippet consulting"
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
              title="Driven by insight, focused on innovation, and committed to your success"
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
                        alt="Snippet expert advising on a tailored technology stack"
                      />
                    </Tilt>
                  </div>
                  <div className="about-image startup2">
                    <Tilt scale={scale} transitionSpeed={4000}>
                      <NextImage
                        src="/images/services/snippet-digital-agency-consutling-prototyping.jpg"
                        fill
                        alt="Snippet focus on transforming digital ambitions into actionable strategies"
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
                    subTitle="Our consulting expertise"
                    title="Guiding every step of your digital journey"
                  />
                  <p>
                    Our consulting approach addresses key areas that shape
                    digital success:
                  </p>
                  <ul className="agency-list">
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">Digital Strategy planning</div>
                    </li>
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">Business Analysis</div>
                    </li>
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">Tech Stack Recommendations</div>
                    </li>
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">Process Optimization</div>
                    </li>
                  </ul>
                  <p>
                    Each service is designed to support your unique goals,
                    helping you make informed decisions that lead to sustained
                    growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** FAQ Section */}
        <ConsultingFaq
          subTitle="Consulting FAQs"
          title="Answering your questions about digital strategy and consulting"
          question1="What types of businesses benefit from consulting?"
          response1=" Consulting can benefit any business looking to enhance its
                                digital presence, streamline processes, or develop a
                                strategic roadmap for growth."
          question2="How does the consulting process work?"
          response2="We begin with an in-depth assessment of your needs, then
                      provide tailored recommendations and strategies aligned
                      with your goals."
          question3="Can I get help with a specific project, or do you provide
                      ongoing consulting?"
          response3="We offer both one-time project consulting and ongoing
                      advisory services to support continuous growth."
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

export default ConsultingPage;
