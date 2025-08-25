import React from 'react';
import Intro from '../../components/Intro/Intro.jsx';
import SwiperSlider, {SwiperSlide} from "../../components/swiper"
import heroSlideLarge from "../../public/images/hero-image/snippet-hero-1.jpg"
import heroSlideMedium from "../../public/images/hero-image/snippet-hero-1-medium.jpg"
import heroSlideSmall from "../../public/images/hero-image/snippet-hero-1-small.jpg"

const IntroData = [{
    "id": "1",
    "title": "We Design, Develop and Launch digital products",
    "desc": "We partner with companies, brands, and founders to build solutions that truly transform businesses and connect meaningfully to the people that use them.",
    "largeImage": `${heroSlideLarge.src}`,
    "mediumImage": `${heroSlideMedium.src}`,
    "smallImage": `${heroSlideSmall.src}`
}]

const IntroSlider =  () => {
    const swiperOption = {
        loop: false,
        speed: 750,
        spaceBetween: 0,
        slidesPerView: 1,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: false,
    }
    return (
        <div className="intro-slider-wrap section">
            <SwiperSlider effect="fade" className="intro-slider" options={swiperOption}>
                {IntroData &&
                    IntroData.map((single, key) => {
                        return(
                            <SwiperSlide key={key}>
                                <Intro data={single} key={key} />
                            </SwiperSlide>
                        ); 
                    })}
                {/* <div className="home-slider-next main-slider-nav swiper-button-next">
                    <i className="fal fa-angle-right"></i>
                </div>
                <div className="home-slider-prev main-slider-nav swiper-button-prev">
                    <i className="fal fa-angle-left"></i>
                </div> */}
            </SwiperSlider>
        </div>
    )
}

export default IntroSlider
