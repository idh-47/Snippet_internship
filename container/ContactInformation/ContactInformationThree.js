import React, { useEffect, useRef } from "react";
import ContactInfoItem from "../../components/ContactInfo/ContactInfoItemTwo.jsx";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo.jsx";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import Parallax from "parallax-js";
import NextImage from "next/image";
import contactBg from "../../public/images/bg/contact-bg.jpg";
import { CldImage } from "next-cloudinary";

const ContactInformationThree = (props) => {
  const sceneEl = useRef(null);
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);
  return (
    <div className="section section-padding contact-section overlay-two">
      <CldImage
        src="contact-bg_x5ercg"
        alt=""
        fill
        loading="lazy"
        style={{ objectFit: "cover" }}
        quality={80}
        className="background-image"
      />
      <div className="container">
        <div className="row row-cols-lg-2 row-cols-1 align-items-center">
          <div className="col" data-aos="fade-up">
            <div className="contact-Information me-xl-7">
              <SectionTitleTwo
                classOption="color-light"
                subTitle={props.subTitle}
                title={props.title}
              />

              {props.data &&
                props.data.map((single, key) => {
                  return (
                    <React.Fragment key={key}>
                      <ContactInfoItem
                        classOption="info-light"
                        data={single}
                        key={key}
                      />
                    </React.Fragment>
                  );
                })}
            </div>
          </div>
          <div
            className="col mt-lg-0 mt-md-10 mt-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="contact-form-area">
              <SectionTitle
                titleOption="section-title text-center mb-7"
                headingOption="title fz-28"
                title={props.title2}
                subTitle={props.subTitle2}
              />
            </div>
          </div>
        </div>
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
  );
};

export default ContactInformationThree;
