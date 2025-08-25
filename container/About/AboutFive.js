import { useState, useEffect, useRef } from "react";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";
import NextImage from "next/image";

const AboutFive = ({ classOption }) => {
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
    <div
      className={`section section-padding-top section-padding-bottom-180 ${classOption}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
            <div className="about-image-area">
              <div className="about-image startup1">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <NextImage src="/images/about/about-3.jpg" fill alt="" />
                </Tilt>
              </div>
              <div className="about-image startup2">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <NextImage src="/images/about/about-4.jpg" fill alt="" />
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
                subTitle="Your needs, your budget, our expertise"
                title="We help startups, small and big companies"
              />

              <p>
                Our team of expert designers, developers, and strategists are
                dedicated to delivering innovative and effective digital
                solutions that drive success.
              </p>
              <div className="row row-cols-sm-2 row-cols-auto mb-n6">
                <div className="col mb-6">
                  <div className="about-funfact">
                    <h6 className="text">User-Centric Approach</h6>
                    <p>
                      When developing MVPs for startups, we prioritize the needs
                      and expectations of end-users. By conducting continuous
                      user testing and incorporating feedback, we ensure that
                      the final product accurately meets the needs of its
                      intended audience.
                    </p>
                  </div>
                </div>
                <div className="col mb-6">
                  <div className="about-funfact">
                    <h6 className="text">Business Thinking</h6>
                    <p>
                      We’ve worked on our own startups, so we know your
                      struggle. We want to be your partner and take a look at
                      your product from the business perspective. There’s a lot
                      more to startups than just technology and we are eager to
                      embrace it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFive;
