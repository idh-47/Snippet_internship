import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import ContactInfoItem from "../../components/ContactInfo/ContactInfoItem.jsx";
import Parallax from "parallax-js";
import CustomImage from "../../components/Image/CustomImage.js";

const ContactInformation = ({
  classOption = "section section-padding-t90-b100",
  ...props
}) => {
  const sceneEl = useRef(null);
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);
  return (
    <div className={`section section-padding-t90-b100 ${classOption}`}>
      <div className="container shape-animate">
        <SectionTitle
          titleOption="section-title text-center mb-lg-12 mb-sm-8 mb-xs-8"
          title={props.title}
          subTitle={props.subTitle}
        />

        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
          {props.data &&
            props.data.map((single, key) => {
              return (
                <div key={key} className="col mb-6" data-aos="fade-up">
                  <ContactInfoItem data={single} key={key} />
                </div>
              );
            })}
        </div>

        <div className="shape shape-1" id="scene" ref={sceneEl}>
          <span data-depth="1">
            <CustomImage
              src="/images/shape-animation/video-shape-1.png"
              alt=""
              fill
            />
          </span>
        </div>
      </div>
    </div>
  );
};

ContactInformation.propTypes = {
  classOption: PropTypes.string,
};
// Removed defaultProps as it is now handled by default parameters

export default ContactInformation;
