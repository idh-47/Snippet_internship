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

const UxUiDesignFaq = () => {
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
              <SectionTitleTwo
                subTitle="UX/UI Design FAQs"
                title="Everything you need to know about our design process"
              />
              <div className="agency-accordion max-mb-n30">
                <Accordion>
                  <AccordionItem id="one">
                    <AccordionTitle id="one">
                      What is your approach to user-centered design?
                    </AccordionTitle>
                    <AccordionContent id="one">
                      We focus on research-driven, user-centered methods to
                      create intuitive and effective interfaces.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem id="two">
                    <AccordionTitle id="two">
                      How does UX differ from UI in your services?
                    </AccordionTitle>
                    <AccordionContent id="two">
                      UX focuses on overall experience, while UI hones in on the
                      visual and interactive design elements.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem id="three">
                    <AccordionTitle id="three">
                      Can you help improve the design of an existing website or
                      app?
                    </AccordionTitle>
                    <AccordionContent id="three">
                      Absolutely. We offer redesign services that enhance both
                      usability and aesthetic appeal.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem id="four">
                    <AccordionTitle id="four">
                      What tools do you use for prototyping and design?
                    </AccordionTitle>
                    <AccordionContent id="four">
                      We use industry-leading tools, such as Figma and Sketch,
                      to build and test our designs.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem id="five">
                    <AccordionTitle id="five">
                      How long does a typical UX/UI design project take?
                    </AccordionTitle>
                    <AccordionContent id="five">
                      Timelines vary, but we work with clients to establish
                      clear milestones based on project complexity.
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

export default UxUiDesignFaq;
