import React from "react";
import PropTypes from "prop-types";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import URLs from "../../constants/urls";

const Intro = (props) => {
  // const IntroData = {
  //   id: "1",
  //   title: "We Design, Develop and Launch digital products",
  //   desc: "We partner with companies, brands, and founders to build solutions that truly transform businesses and connect meaningfully to the people that use them.",
  // };
  return (
    <div className="intro-section overlay section">
      <div className="container">
        <div className="row row-cols-lg-1 row-cols-1">
          <div className="col align-self-center">
            <div className="intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
              <h2 className="title ah-headline">
                {props.we}{" "}
                <Typewriter
                  options={{
                    strings: props.typeWriter,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 110,
                  }}
                />
                {props.DP}{" "}
              </h2>
              <div className="desc">
                <p>{props.desc}</p>
              </div>
              <Link
                href={URLs.contact}
                className="btn btn-primary btn-hover-secondary"
              >
                {props.GS}
              </Link>
              <Link
                href={URLs.services}
                className="btn btn-outline-white btn-hover-primary"
              >
                {" "}
                {props.LM}{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Intro.propTypes = {
  data: PropTypes.object,
};

export default Intro;
