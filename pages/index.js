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

//data imports
import IconBoxData from "../data/iconBox/icon-box.json";
import contactData from "../data/contactInfo/contactInfo.json";
import FooterData from "../data/Footer/footerItem.json";

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
        <Header
          home="Home"
          about="About Us"
          services="Our Services"
          consulting="Consulting"
          design="UX/UI Design"
          development="Development"
          contact="Contact Us"
        />

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
              <Intro
                we="We"
                typeWriter={["Design", "Develop", "Launch"]}
                DP="Digital products"
                desc="We partner with companies, brands, and founders to build solutions that truly transform businesses and connect meaningfully to the people that use them."
                GS="Get Started"
                LM="Learn More"
              />
            </SwiperSlide>
          </SwiperSlider>
        </div>

        <HomeAbout
          title="We are a full-service digital agency"
          subTitle="No matter if it's a small website or bespoke application we are always ready to offer our services with dedication and perfection."
          subTitle2="Empowering your digital journey"
          title2="We think strategy, craft design, develop digital.."
          desc="We can help you transform an idea into a fully viable product,
                starting by defining the goals and building a roadmap to the
                best user-experience solution."
          btnText="About Us"
        />
        <ServiceIconBox
          classOption="bg-color-1"
          title="We can help you bring your idea to life"
          subTitle="From idea to viable product, we can help you define your goals and create a roadmap to the best user experience solution."
          data={IconBoxData}
        />
        <HomeSuccess
          subTitle="Your success is our motivation"
          title="We are passionate about using technology to solve problems and create value"
          website="Websites"
          ecommerce="E-Commerce"
          webMobileApps="Web & Mobile Apps"
          apiIntegrations="API & 3rd Party Integrations"
          devops="DevOps"
        />
        <Newsletter
          title="Let's discuss how we can work together"
          subTitle="Ready to start your project? We would love to hear from you. Our team of experts is ready to help you bring your digital projects to life. "
        />
        <ContactInformation
          title="CONTACT US, YOU WILL NOT BE DISAPPOINTED"
          subTitle="Don't hesitate to get in touch with us – we would be happy to discuss your needs and goals in more detail. Contact us today and let's start a conversation!"
          data={contactData}
        />
        <Footer data={FooterData} />
        <ScrollToTop />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const heroBlur = getCldImageUrl({
    src: "snippet-ws/hero-image/j3ku5sw4mhfidbkrum5d",
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
      heroBlur,
    },
  };
}
