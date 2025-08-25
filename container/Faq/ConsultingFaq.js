import { useState, useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";
import NextImage from "next/image";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo";
import Accordion, {
  AccordionItem,
  AccordionTitle,
  AccordionContent,
} from "../../components/Accordion";

const ConsultingFaq = (props) => {
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
    <div className="faq-section section section-padding-top bg-primary-blue">
      <div className="container">
        <div className="row row-cols-lg-2 row-cols-1 mb-n6">
          <div className="col mb-6" data-aos="fade-up">
            <div className="faq-content">
              <SectionTitleTwo subTitle={props.subTitle} title={props.title} />
              <div className="agency-accordion max-mb-n30">
                <Accordion>
                  <AccordionItem id="one">
                    <AccordionTitle id="one">{props.question1}</AccordionTitle>
                    <AccordionContent id="one">
                      {props.response1}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem id="two">
                    <AccordionTitle id="two">{props.question2}</AccordionTitle>
                    <AccordionContent id="two">
                      {props.response2}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem id="three">
                    <AccordionTitle id="three">
                      {props.question3}
                    </AccordionTitle>
                    <AccordionContent id="three">
                      {props.response3}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>

          <div
            className="col mb-6 ps-xl-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="about-image-area right-0 skill-image-area">
              <div className="about-image skill-1">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <NextImage
                    src="/images/skill/snippet-digital-agency-faq-morocco.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 767px) 250w,
                          370w"
                  />
                </Tilt>
              </div>
              <div className="about-image skill-2">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <NextImage
                    src="/images/skill/snippet-agency-consulting.jpg"
                    alt=""
                    fill
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
        </div>
      </div>
    </div>
  );
};

export default ConsultingFaq;
