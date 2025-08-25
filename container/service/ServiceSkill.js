import { useState, useEffect, useRef } from "react";
import ProgressBarSkills from "../../components/skills/ProgressBarSkills";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";
import NextImage from "next/image";

const ServiceSkill = () => {
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
      className="section section-padding-top skill-section-padding-bottom bg-primary-blue"
      data-bg-color="#f8faff"
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-5 col-lg-6 order-lg-1 order-2"
            data-aos="fade-up"
          >
            <div className="progressbar-area mt-lg-0 mt-md-50 mt-sm-50 mt-40">
              <ProgressBarSkills />
            </div>
          </div>

          <div
            className="offset-xl-1 col-xl-6 col-lg-6 order-lg-2 order-1"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="about-image-area right-0 skill-image-area">
              <div className="about-image skill-1">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <NextImage src="/images/skill/skill-1.jpg" fill alt="" />
                </Tilt>
              </div>
              <div className="about-image skill-2">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <NextImage src="/images/skill/skill-2.jpg" fill alt="" />
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

export default ServiceSkill;
