import PropTypes from "prop-types";
import React from "react";
import IconBox from "../../components/IconBox/IconBox.jsx";
import SectionTitle from "../../components/SectionTitles/SectionTitle";

const ServiceIconBox = (props) => {
  return (
    <div className={`section section-padding-t90-b100 ${props.classOption}`}>
      <div className="container">
        <SectionTitle title={props.title} subTitle={props.subTitle} />

        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
          {props.data &&
            props.data.slice(0, 3).map((single, key) => {
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
