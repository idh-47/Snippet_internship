import PropTypes from "prop-types";
import React from "react";

const SectionTitle = ({
  title,
  subTitle,
  titleOption = "text-center",
  headingOption = "title",
}) => {
  return (
    <div className={`section-title ${titleOption}`} data-aos="fade-up">
      <h2
        className={`title ${headingOption}`}
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>
      <p className="sub-title">{subTitle}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string,
  titleOption: PropTypes.string,
  headingOption: PropTypes.string,
};

export default SectionTitle;
