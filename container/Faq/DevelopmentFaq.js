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

const DevelopmentFaq = () => {
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
                subTitle="Development FAQs"
                title="Answers to some questions about our development process"
              />
              <div className="agency-accordion max-mb-n30">
                <Accordion>
                  <AccordionItem id="one">
                    <AccordionTitle id="one">
                      What types of development projects does Snippet handle?
                    </AccordionTitle>
                    <AccordionContent id="one">
                      We manage a wide range of projects, including web, mobile,
                      and custom software development tailored to your needs.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem id="two">
                    <AccordionTitle id="two">
                      How does Snippet ensure code quality and security?
                    </AccordionTitle>
                    <AccordionContent id="two">
                      We implement industry best practices, conduct regular code
                      reviews, and perform rigorous testing to maintain high
                      standards.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem id="three">
                    <AccordionTitle id="three">
                      Can you integrate with existing systems and platforms?
                    </AccordionTitle>
                    <AccordionContent id="three">
                      Yes, we specialize in seamless API integrations and can
                      work with legacy systems.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem id="four">
                    <AccordionTitle id="four">
                      Do you offer ongoing support after project launch?
                    </AccordionTitle>
                    <AccordionContent id="four">
                      Absolutely. We provide maintenance and support services to
                      ensure continued performance and updates.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem id="five">
                    <AccordionTitle id="five">
                      How long does a typical development project take?
                    </AccordionTitle>
                    <AccordionContent id="five">
                      We work in Agile sprints, allowing for flexibility and
                      iterative progress. Project timelines vary based on
                      complexity, but we collaborate closely with you to define
                      milestones and deliverables.
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
                    alt="Snippet - Creating tomorrow’s technology today"
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
