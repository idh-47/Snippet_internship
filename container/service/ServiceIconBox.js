import PropTypes from "prop-types";
import React from "react";
import IconBoxData from "../../data/iconBox/icon-box.json";
import IconBox from "../../components/IconBox/IconBox.jsx";
import SectionTitle from "../../components/SectionTitles/SectionTitle";

const ServiceIconBox = ({
  classOption = "section section-padding-t90-b100",
}) => {
  return (
    <div className={`section section-padding-t90-b100 ${classOption}`}>
      <div className="container">
        <SectionTitle
          title="We can help you bring your idea to life"
          subTitle="From idea to viable product, we can help you define your goals and create a roadmap to the best user experience solution"
        />

        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
          {IconBoxData &&
            IconBoxData.slice(0, 3).map((single, key) => {
              return (
                <div key={key} className="col mb-6" data-aos="fade-up">
                  <IconBox classOption="box-border" data={single} key={key} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

ServiceIconBox.propTypes = {
  classOption: PropTypes.string,
};

export default ServiceIconBox;
