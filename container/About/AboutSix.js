import {useState, useEffect, useRef} from "react";
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import Link from "next/link";
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';
import NextImage from "next/image";
import URLs from '../../constants/urls';


const AboutSix = () => {
    const [scale] = useState(1.04);
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })
        
        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className="section section-padding-top technology-section-padding-bottom-180">
            <div className="container">

                <div className="row">

                    <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                        <div className="about-image-area">
                            <div className="about-image startup1">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <NextImage src="/images/about/about-5.jpg" fill alt="" />
                                </Tilt>
                            </div>
                            <div className="about-image startup2">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <NextImage src="/images/about/about-6.jpg" fill alt="" />
                                </Tilt>
                            </div>
                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1"><NextImage src="/images/shape-animation/about-shape-1.png" fill alt="" /></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-content-area">
                            <SectionTitleTwo 
                                subTitle="Process simple and Customer-focused"
                                title="Our Workflows Based on Lean Principles and Agile Development"
                            />

                            <p>We are <b>passionate</b> about what we do, the <b>business challenges</b> we tackle, and the people we work with.</p>
                            <p>Our unique <b>process</b> stands out due to our early focus on value and close <b>partnerships</b>. We take the time to understand each <b>product</b> and identify opportunities for easy acquisition flows, generate value early to retain users, and build a strong infrastructure for <b>scalability</b>.</p>
                            <p>Our <b>workflows</b> are based on lean principles, rapid <b>prototyping</b> techniques, and <b>agile</b> development, which allows us to be <b>fast</b> and flexible in delivering value to our users.</p>

                            <Link className="btn btn-primary btn-hover-secondary mt-xl-12 mt-lg-8 mt-md-6 mt-4" href={URLs.contact}>Get Started</Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AboutSix;
