import { useState, useEffect, useRef } from "react";
import { CldImage } from "next-cloudinary";
import SectionTitle from "../SectionTitles/SectionTitle";
import SectionTitleTwo from "../SectionTitles/SectionTitleTwo";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";
import Link from "next/link";
import NextImage from "next/image";
import Image from "next/image";

export async function getStaticProps() {
  const about1Blur = getCldImageUrl({
    src: "snippet-ws/about/home-one-about/y3jtdsjmtibbtftfpvor",
    quality: 10,
    blur: 1000,
  });
  const about2Blur = getCldImageUrl({
    src: "snippet-ws/about/home-one-about/hkp9z3tpkp0ziz31hlas",
    quality: 10,
    blur: 1000,
  });

  return {
    props: {
      about1Blur,
      about2Blur,
    },
  };
}

const HomeAbout = (about1Blur, about2Blur) => {
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
    <div className="section section-padding-t90 section-padding-bottom-200">
      <div className="container">
        <SectionTitle
          title="We are a full-service digital agency"
          subTitle="No matter if it's a small website or bespoke application we are always ready to offer our services with dedication and perfection."
        />

        <div className="row">
          <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
            <div className="about-image-area">
              <div className="about-image whoweare">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <CldImage
                    src="snippet-ws/about/home-one-about/y3jtdsjmtibbtftfpvor"
                    alt=""
                    fill
                    blurDataURL={about1Blur}
                    blur
                    sizes="(max-width: 767px) 250w,
                          370w"
                  />
                </Tilt>
              </div>

              <div className="about-image whoweare">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <CldImage
                    src="snippet-ws/about/home-one-about/hkp9z3tpkp0ziz31hlas"
                    alt=""
                    fill
                    blurDataURL={about2Blur}
                    blur
                    sizes="(max-width: 767px) 250w,
                          370w"
                  />
                </Tilt>
              </div>
              <div className="shape shape-1" id="scene" ref={sceneEl}>
                <span data-depth="1">
                  <Image
                    src="/images/shape-animation/about-shape-1.png"
                    alt="Shape Animation"
                    loading="lazy"
                    fill
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
              <SectionTitleTwo
                subTitle="Empowering your digital journey"
                title="We think strategy, craft design, develop digital.."
              />

              <p>
                We can help you transform an idea into a fully viable product,
                starting by defining the goals and building a roadmap to the
                best user-experience solution.
              </p>

              <Link
                className="btn btn-primary btn-hover-secondary mt-xl-8 mt-lg-8 mt-md-6 mt-4"
                href="/about-us"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
