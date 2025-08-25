import { useState, useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";
import ProgressBarSkills from "../skills/ProgressBarSkills";
import NextImage from "next/image";
import { CldImage } from "next-cloudinary";

export async function getStaticProps() {
  const skill1Blur = getCldImageUrl({
    src: "skill-1_fuffzr",
    quality: 10,
    blur: 1000,
  });
  const skill2Blur = getCldImageUrl({
    src: "skill-2_jwg9nw",
    quality: 10,
    blur: 1000,
  });

  return {
    props: {
      skill1Blur,
      skill2Blur,
    },
  };
}

const HomeSuccess = ({ skill1Blur, skill2Blur, ...props }) => {
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
    <div className="section section-padding-top success-section-padding-bottom-180">
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <div className="about-image-area right-0 skill-image-area">
              <div className="about-image skill-1">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <CldImage
                    src="skill-1_fuffzr"
                    alt=""
                    fill
                    blurDataURL={skill1Blur}
                    blur
                    loading="lazy"
                    quality={100}
                    sizes="(max-width: 767px) 250w,
                          370w"
                  />
                </Tilt>
              </div>
              <div className="about-image skill-2">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <CldImage
                    src="skill-2_jwg9nw"
                    alt=""
                    fill
                    blurDataURL={skill2Blur}
                    blur
                    loading="lazy"
                    quality={100}
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
            <div className="success-content mt-lg-0 mt-md-50 mt-sm-50 mt-40">
              <ProgressBarSkills
                title={props.title}
                subTitle={props.subTitle}
                website={props.website}
                ecommerce={props.ecommerce}
                webMobileApps={props.webMobileApps}
                apiIntegrations={props.apiIntegrations}
                devops={props.devops}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSuccess;
