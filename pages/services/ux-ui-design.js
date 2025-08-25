import { useState, useEffect, useRef } from "react";
import React from "react";
import Head from "next/head";
import Tilt from "react-parallax-tilt";
import NextImage from "next/image";
import Parallax from "parallax-js";

// Components
import Header from "../../partials/header/Header.jsx";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo.jsx";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb.js";
import CallToActionTwo from "../../container/CallToAction/CallToActionTwo.js";
import Footer from "../../container/Footer/Footer.js";
import ScrollToTop from "../../components/ScrollToTop.jsx";
import headerBg from "../../public/images/bg/snippet-breadcrumb-bg-studio.jpg";
import SectionTitle from "../../components/SectionTitles/SectionTitle.jsx";
import dividerBg from "../../public/images/bg/snippet-ux-ui-design-divider-bg.jpg";
import UxUiDesignFaq from "../../container/Faq/UxUiDesignFaq.js";
import ContactInformationThree from "../../container/ContactInformation/ContactInformationThree.js";

const UxUiDesignPage = () => {
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
          User-Centric UX/UI Design Services - Snippet - Empowering your digital
          journey
        </title>
        <meta
          name="description"
          content="Enhance your digital presence with Snippet’s UX/UI design services. We create user-centered, visually appealing, and functional designs to drive engagement and success."
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
          title="Turning ideas into stunning, user-friendly interfaces"
          content="Services"
          contentTwo="UX/UI Design"
        />
        {/** Introduction Section */}
        <div className="section section-padding-top about-section-padding-bottom-200">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
                <div className="about-content-area whoweare-content mt-0 mb-md-10 mb-10">
                  <SectionTitleTwo
                    subTitle="Design that puts the user first"
                    title="Creating engaging, user-centric designs for digital success"
                  />
                  <p>
                    Our UX/UI design services focus on delivering meaningful and
                    memorable experiences. Through careful research, strategic
                    planning, and intuitive design, we craft interfaces that
                    resonate with users and support your business goals.
                  </p>
                  <p>
                    Our approach combines creativity and data-driven insights to
                    create solutions that engage, inspire, and perform.
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
                        src="/images/services/snippet-digital-agency-ux-ui-design.jpg"
                        fill
                        alt="User-centric interface design by snippet for enhanced digital experiences"
                      />
                    </Tilt>
                  </div>
                  <div className="about-image philosophy js-tilt">
                    <Tilt scale={scale} transitionSpeed={4000}>
                      <NextImage
                        src="/images/services/snippet-digital-agency-ux-ui-layout.jpg"
                        fill
                        alt="Intuitive ux wireframes by snippet to improve engagement and usability"
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
              title="Designing with empathy, building with purpose"
            />
          </div>

          <div className="shape shape-1" id="scene" ref={sceneEl}>
            <span data-depth="1">
              <NextImage
                src="/images/shape-animation/newsletter-shape.png"
                fill
                alt="Snippet - Accessible and inclusive design solutions"
              />
            </span>
          </div>
        </div>

        {/** UX/UI Design Details Section */}
        <div className="section section-padding-top section-padding-bottom-180">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                <div className="about-image-area">
                  <div className="about-image startup1">
                    <Tilt scale={scale} transitionSpeed={4000}>
                      <NextImage
                        src="/images/services/snippet-digital-agency-ux-ui-design-prototyping.jpg"
                        fill
                        alt="Snippet - Prototype testing and feedback for a refined user experience"
                      />
                    </Tilt>
                  </div>
                  <div className="about-image startup2">
                    <Tilt scale={scale} transitionSpeed={4000}>
                      <NextImage
                        src="/images/services/snippet-digital-agency-ux-ui-design-wireframing.jpg"
                        fill
                        alt="Snippet : custom ux/ui design aligned with brand identity and user needs"
                      />
                    </Tilt>
                  </div>

                  <div className="shape shape-1" id="scene" ref={sceneEl}>
                    <span data-depth="1">
                      <NextImage
                        src="/images/shape-animation/about-shape-1.png"
                        fill
                        alt="Responsive ux/ui solutions for seamless user interaction"
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
                    subTitle="Our UX/UI design expertise"
                    title="From concept to final touches"
                  />
                  <p>
                    We specialize in transforming ideas into functional,
                    visually appealing interfaces that align with user
                    expectations and business objectives.
                  </p>
                  <ul className="agency-list">
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">User Research & Personas</div>
                    </li>
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">Wireframing & Prototyping</div>
                    </li>
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">Interface & Visual Design</div>
                    </li>
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">Usability Testing</div>
                    </li>
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">Accessibility Audits</div>
                    </li>
                  </ul>
                  <p>
                    Our team works across every stage of design, from initial
                    research to final refinements, ensuring a cohesive and
                    engaging user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** FAQ Section */}
        <UxUiDesignFaq />
        <CallToActionTwo />
        <ContactInformationThree />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
};

export default UxUiDesignPage;
