// Next.js and React imports
import Head from "next/head";
import { Inter } from "@next/font/google";
import { CldImage, getCldImageUrl } from "next-cloudinary";

// Component imports
import Header from "../partials/header/Header";
import HomeAbout from "../components/About/HomeAbout";
import HomeSuccess from "../components/Success/HomeSuccess";
import Intro from "../components/Intro/Intro.jsx";
import ScrollToTop from "../components/ScrollToTop";
import SwiperSlider, { SwiperSlide } from "../components/swiper";

// Container imports
import ServiceIconBox from "../container/service/ServiceIconBox";
import Newsletter from "../container/Newsletter/Newsletter";
import ContactInformation from "../container/ContactInformation/ContactInformation";
import Footer from "../container/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ swiperOption, heroBlur }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Snippet - Empowering your digital journey</title>
        <meta
          name="description"
          content="Snippet - Empowering your digital journey"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <main>
        <Header />

        <div className="intro-slider-wrap section">
          <SwiperSlider
            effect="fade"
            className="intro-slider"
            options={swiperOption}
          >
            <SwiperSlide>
              <CldImage
                src="snippet-ws/hero-image/j3ku5sw4mhfidbkrum5d"
                alt="We Design, Develop and Launch digital solutions - Snippet - Empowering your digital journey"
                quality={100}
                priority
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 100vw"
                blurDataURL={heroBlur}
                blur
                style={{
                  objectFit: "cover",
                }}
              />
              <Intro />
            </SwiperSlide>
          </SwiperSlider>
        </div>

        <HomeAbout />
        <ServiceIconBox classOption="bg-color-1" />
        <HomeSuccess />
        <Newsletter />
        <ContactInformation />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const heroBlur = getCldImageUrl({
    src: 'snippet-ws/hero-image/j3ku5sw4mhfidbkrum5d',
    quality: 10,
    blur: 1000,
  });

  const swiperOption = {
    loop: false,
    speed: 750,
    spaceBetween: 0,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: false,
  };

  return {
    props: {
      swiperOption,
      heroBlur
    },
  };
}
