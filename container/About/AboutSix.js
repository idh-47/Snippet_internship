import { useState, useEffect, useRef } from "react";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";
import NextImage from "next/image";
import URLs from "../../constants/urls";

const AboutSix = (props) => {
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
    <div className="section section-padding-top technology-section-padding-bottom-180">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
            <div className="about-image-area">
              <div className="about-image startup1">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <NextImage src="/images/about/about-5.jpg" fill alt="" />
                </Tilt>
              </div>
              <div className="about-image startup2">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <NextImage src="/images/about/about-6.jpg" fill alt="" />
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
            <div className="about-content-area">
              <SectionTitleTwo subTitle={props.subTitle} title={props.title} />

              <p>{props.desc}</p>

              <Link
                className="btn btn-primary btn-hover-secondary mt-xl-12 mt-lg-8 mt-md-6 mt-4"
                href={URLs.contact}
              >
                {props.btnText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSix;
