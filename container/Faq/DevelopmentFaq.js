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

const DevelopmentFaq = ({
  subTitle,
  title,
  question1,
  response1,
  question2,
  response2,
  question3,
  response3,
  question4,
  response4,
  question5,
  response5,
}) => {
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
              <SectionTitleTwo subTitle={subTitle} title={title} />
              <div className="agency-accordion max-mb-n30">
                <Accordion>
                  <AccordionItem id="one">
                    <AccordionTitle id="one">{question1}</AccordionTitle>
                    <AccordionContent id="one">{response1}</AccordionContent>
                  </AccordionItem>
                  <AccordionItem id="two">
                    <AccordionTitle id="two">{question2}</AccordionTitle>
                    <AccordionContent id="two">{response2}</AccordionContent>
                  </AccordionItem>
                  <AccordionItem id="three">
                    <AccordionTitle id="three">{question3}</AccordionTitle>
                    <AccordionContent id="three">{response3}</AccordionContent>
                  </AccordionItem>
                  {question4 && response4 && (
                    <AccordionItem id="four">
                      <AccordionTitle id="four">{question4}</AccordionTitle>
                      <AccordionContent id="four">{response4}</AccordionContent>
                    </AccordionItem>
                  )}
                  {question5 && response5 && (
                    <AccordionItem id="five">
                      <AccordionTitle id="five">{question5}</AccordionTitle>
                      <AccordionContent id="five">{response5}</AccordionContent>
                    </AccordionItem>
                  )}
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
                    alt="Snippet - Creating tomorrow's technology today"
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
                    alt="Snippet - Engineering solutions for a better future"
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

export default DevelopmentFaq;
