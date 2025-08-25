import ProgressBar from "react-bootstrap/ProgressBar";
import SectionTitleTwo from "../SectionTitles/SectionTitleTwo";

const ProgressBarSkills = () => {
  return (
    <div>
      <SectionTitleTwo
        subTitle="Your success is our motivation"
        title="We are passionate about using technology to solve problems and create value"
      />

      <div className="progress-bar--one">
        <div className="progress-charts">
          <h6 className="heading ">Websites</h6>
          <div className="single-progress">
            <ProgressBar
              name="websites"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="450"
              className="gradient-1"
              now="91"
            />
          </div>
        </div>

        <div className="progress-charts ">
          <h6 className="heading ">E-Commerce</h6>
          <div className="single-progress">
            <ProgressBar
              name="ecommerce"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="450"
              className="gradient-3"
              now="88"
            />
          </div>
        </div>

        <div className="progress-charts ">
          <h6 className="heading ">Web & Mobile Apps</h6>
          <div className="single-progress">
            <ProgressBar
              name="web and mobile apps"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="450"
              className="gradient-2"
              now="95"
            />
          </div>
        </div>

        <div className="progress-charts ">
          <h6 className="heading ">API & 3rd Party Integrations</h6>
          <div className="single-progress">
            <ProgressBar
              name="api and integrations"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="450"
              className="gradient-4"
              now="89"
            />
          </div>
        </div>

        <div className="progress-charts ">
          <h6 className="heading ">DevOps</h6>
          <div className="single-progress">
            <ProgressBar
              name="devops"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="450"
              className="gradient-5"
              now="84"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarSkills;
