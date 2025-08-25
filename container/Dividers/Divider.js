import React, { useEffect, useRef } from "react";
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import Parallax from 'parallax-js';
import NextImage from "next/image";
import dividerBg from "../../public/images/bg/video-bg.jpg"

const Divider = () => {
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })
        
        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className="video-section section section-padding overlay-two" style={{backgroundImage: `url(${dividerBg.src})`}}>

            <div className="container text-center">

                <div className="section-title color-light text-center">
                    <h2 className="title"></h2>
                </div>
                <SectionTitle
                    titleOption="color-light text-center"
                    title="We are responsive, reliable, and dedicated to delivering the best possible results.."
                />


            </div>

            <div className="shape shape-1" id="scene" ref={sceneEl}>
                <span data-depth="1">
                    <NextImage src="/images/shape-animation/newsletter-shape.png" fill alt="" />
                </span>
            </div>

        </div>
    )
}

export default Divider;
