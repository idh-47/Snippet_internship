import React from 'react';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import Link from "next/link";
import CustomImage from '../../components/Image/CustomImage';
import URLs from '../../constants/urls';

const CallToActionTwo = () => {
    return (
        <div className="cta-section section section-padding-250">
            <div className="container text-center icon-up-down-animation">
                <SectionTitle
                    headingOption="fz-34"
                    title="Ready to take the next step and bring your digital project to life?"
                    subTitle="Our team of expert designers, developers, and creatives are passionate about their work and love helping our clients succeed."
                />
                <Link className="btn btn-primary btn-hover-secondary" href={URLs.contact} data-aos="fade-up" data-aos-delay="300">Contact Us</Link>

                <div className="shape shape-1">
                    <span>
                        <CustomImage src="/images/icon-animation/icon-startup.png" fill alt="" />
                    </span>
                </div>
                <div className="shape shape-2">
                    <span>
                        <CustomImage src="/images/icon-animation/icon-devops.png" fill alt="" />
                    </span>
                </div>
                <div className="shape shape-3">
                    <span>
                        <CustomImage src="/images/icon-animation/icon-mongodb.png" fill alt="" />
                    </span>
                </div>
                <div className="shape shape-4">
                    <span>
                        <CustomImage src="/images/icon-animation/icon-cloud.png" fill alt="" />
                    </span>
                </div>
                <div className="shape shape-5">
                    <span>
                        <CustomImage src="/images/icon-animation/icon-nodejs.png" fill alt="" />
                    </span>
                </div>
                <div className="shape shape-6">
                    <span>
                        <CustomImage src="/images/icon-animation/icon-python.png" fill alt="" />
                    </span>
                </div>
                <div className="shape shape-7">
                    <span>
                        <CustomImage src="/images/icon-animation/icon-react.png" fill alt="" />
                    </span>
                </div>
                <div className="shape shape-8">
                    <span>
                        <CustomImage src="/images/icon-animation/icon-ux.png" fill alt="" />
                    </span>
                </div>
                <div className="shape shape-9">
                    <span>
                        <CustomImage src="/images/icon-animation/icon-scrum.png" fill alt="" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CallToActionTwo;
