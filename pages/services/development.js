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
import dividerBg from "../../public/images/bg/snippet-technology-agency.jpg";
import DevelopmentFaq from "../../container/Faq/DevelopmentFaq.js";
import ContactInformationThree from "../../container/ContactInformation/ContactInformationThree.js";

const DevelopmentPage = () => {
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
          Full-Stack Development Services - Snippet - Empowering your digital
          journey
        </title>
        <meta
          name="description"
          content="Snippet Agency offers expert web, mobile, and custom software development. We build scalable, secure, and high-performance digital solutions tailored to your business needs."
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
          title="Building robust, scalable solutions for your digital growth"
          content="Services"
          contentTwo="Development"
        />
        {/** Introduction Section */}
        <div className="section section-padding-top about-section-padding-bottom-200">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
                <div className="about-content-area whoweare-content mt-0 mb-md-10 mb-10">
                  <SectionTitleTwo
                    subTitle="Your Vision, Our Development Expertise"
                    title="Bringing ideas to life with precision"
                  />
                  <p>
                    Snippet transforms ideas into robust, scalable digital
                    solutions that prioritize performance, security, usability,
                    and maintainability—ensuring our applications deliver value
                    at every stage of your business.
                  </p>
                  <p>
                    Our development team applies a strategic approach to each
                    project, emphasizing quality and customization to deliver
                    technology that empowers your digital growth while remaining
                    easy to manage and update.
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
                        src="/images/services/snippet-digital-agency-development-coding.jpg"
                        fill
                        alt="Snippet agency coding a secure, scalable digital solution"
                      />
                    </Tilt>
                  </div>
                  <div className="about-image philosophy js-tilt">
                    <Tilt scale={scale} transitionSpeed={4000}>
                      <NextImage
                        src="/images/services/snippet-digital-agency-development-services.jpg"
                        fill
                        alt="Snippet - Code your vision into reality"
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
              title="Engineered with precision, Developed for impact"
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

        {/** Development Details Section */}
        <div className="section section-padding-top section-padding-bottom-180">
          <div className="container">
            <div className="row">
              <div className="col-lg-6" data-aos="fade-up">
                <div className="about-image-area right-0 skill-image-area">
                  <div className="about-image skill-1">
                    <Tilt scale={scale} transitionSpeed={4000}>
                      <NextImage
                        src="/images/services/snippet-digital-agency-code-quality.jpg"
                        alt="Snippet - Crafting scalable solutions for growth"
                        fill
                        sizes="(max-width: 767px) 250w,
                          370w"
                      />
                    </Tilt>
                  </div>
                  <div className="about-image skill-2">
                    <Tilt scale={scale} transitionSpeed={4000}>
                      <NextImage
                        src="/images/services/snippet-digital-agency-bespoke.jpg"
                        alt="Snippet - Your partner in digital development"
                        fill
                        sizes="(max-width: 767px) 250w,
                          370w"
                      />
                    </Tilt>
                  </div>
                  <div className="shape shape-1" id="scene" ref={sceneEl}>
                    <span data-depth="1">
                      <NextImage
                        src="/images/shape-animation/video-shape-1.png"
                        alt=""
                        fill
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="offset-lg-1 col-lg-5"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="about-content-area whychoose-content">
                  <SectionTitleTwo
                    subTitle="Comprehensive Development Services"
                    title="Tailored solutions for your digital needs"
                  />
                  <p>
                    At Snippet Agency, we specialize in delivering high-quality
                    development services that align with your business goals.
                    Our expertise spans various areas, ensuring we meet the
                    unique demands of each project.
                  </p>
                  <ul className="agency-list">
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">Web & Mobile Development</div>
                    </li>
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">E-commerce Solutions</div>
                    </li>
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">API Design and Integration</div>
                    </li>
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">Solution Architecture</div>
                    </li>
                    <li className="item">
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="text">Cloud Solutions</div>
                    </li>
                  </ul>
                  <p>
                    Partner with us to leverage technology that drives your
                    success and adapts to your evolving needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** FAQ Section */}
        <DevelopmentFaq />
        <CallToActionTwo />
        <ContactInformationThree />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
};

export default DevelopmentPage;
