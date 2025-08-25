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

const ConsultingFaq = () => {
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
                subTitle="Consulting FAQs"
                title="Answering your questions about digital strategy and consulting"
              />
              <div className="agency-accordion max-mb-n30">
                <Accordion>
                  <AccordionItem id="one">
                    <AccordionTitle id="one">
                      What types of businesses benefit from consulting?
                    </AccordionTitle>
                    <AccordionContent id="one">
                      Consulting can benefit any business looking to enhance its
                      digital presence, streamline processes, or develop a
                      strategic roadmap for growth.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem id="two">
                    <AccordionTitle id="two">
                      How does the consulting process work?
                    </AccordionTitle>
                    <AccordionContent id="two">
                      We begin with an in-depth assessment of your needs, then
                      provide tailored recommendations and strategies aligned
                      with your goals.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem id="three">
                    <AccordionTitle id="three">
                      Can I get help with a specific project, or do you provide
                      ongoing consulting?
                    </AccordionTitle>
                    <AccordionContent id="three">
                      We offer both one-time project consulting and ongoing
                      advisory services to support continuous growth.
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
