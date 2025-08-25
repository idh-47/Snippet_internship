import { useState, useEffect, useRef } from "react";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";
import NextImage from "next/image";

const AboutFour = (props) => {
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
    <div className="section section-padding-top about-section-padding-bottom-200">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
            <div className="about-content-area whoweare-content mt-0 mb-md-10 mb-10">
              <SectionTitleTwo subTitle={props.subTitle} title={props.title} />
              <p>{props.desc}</p>
              <div className="row row-cols-sm-2 row-cols-auto mb-n6">
                <div className="col mb-6">
                  <div className="about-funfact">
                    <h6 className="text">{props.miniTitle1}</h6>
                    <p>{props.minidesc}</p>
                  </div>
                </div>
                <div className="col mb-6">
                  <div className="about-funfact">
                    <h6 className="text">{props.miniTitle2}</h6>
                    <p>{props.minidesc2}</p>
                  </div>
                </div>
              </div>
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
                  <NextImage src="/images/about/about-1.jpg" fill alt="" />
                </Tilt>
              </div>
              <div className="about-image philosophy js-tilt">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <NextImage src="/images/about/about-2.jpg" fill alt="" />
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
  );
};

export default AboutFour;
