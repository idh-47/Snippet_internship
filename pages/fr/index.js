// Next.js and React imports
import Head from "next/head";
import { Inter } from "@next/font/google";
import { CldImage, getCldImageUrl } from "next-cloudinary";

// Component imports
import Header from "../../partials/header/Header";
import HomeAbout from "../../components/About/HomeAbout";
import HomeSuccess from "../../components/Success/HomeSuccess";
import Intro from "../../components/Intro/Intro.jsx";
import ScrollToTop from "../../components/ScrollToTop";
import SwiperSlider, { SwiperSlide } from "../../components/swiper";

//data imports
import IconBoxDatafr from "../../data/iconBox/icon-box-fr.json";
import contactDatafr from "../../data/contactInfo/contactinfo-fr.json";
import FooterDatafr from "../../data/Footer/footeritem-fr.json";

// Container imports
import ServiceIconBox from "../../container/service/ServiceIconBox";
import Newsletter from "../../container/Newsletter/Newsletter";
import ContactInformation from "../../container/ContactInformation/ContactInformation";
import Footer from "../../container/Footer/Footer";

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
          home="Accueil"
          about="À Propos"
          services="Nos Services"
          consulting="Consultation"
          design="Design UX/UI"
          development="Développement"
          contact="Nous Contacter"
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
                we="Nous"
                typeWriter={["Concevoir", "Développer", "Lancer"]}
                DP="Produits numériques"
                desc="Nous nous associons avec des entreprises, des marques et des fondateurs pour créer des solutions qui transforment véritablement les entreprises et se connectent de manière significative aux personnes qui les utilisent."
                GS="Commencer"
                LM="En Savoir Plus"
              />
            </SwiperSlide>
          </SwiperSlider>
        </div>

        <HomeAbout
          title="Nous sommes une agence digitale à service complet"
          subTitle="Qu'il s'agisse d'un petit site web ou d'une application sur mesure, nous sommes toujours prêts à vous offrir nos services avec dévouement et perfection."
          subTitle2="Optimiser votre parcours digital"
          title2="Nous réfléchissons à la stratégie, concevons, développons le digital..."
          desc="Nous pouvons vous aider à transformer une idée en un produit pleinement viable, en commençant par définir les objectifs et en élaborant une feuille de route vers la meilleure solution d'expérience utilisateur."
          btnText="À propos de nous"
        />
        <ServiceIconBox
          classOption="bg-color-1"
          title="Nous pouvons vous aider à donner vie à votre idée"
          subTitle="De l'idée au produit viable, nous pouvons vous aider à définir vos objectifs et à créer une feuille de route pour la meilleure solution d'expérience utilisateur."
          data={IconBoxDatafr}
        />
        <HomeSuccess
          subTitle="Votre réussite est notre motivation"
          title="Nous sommes passionnés par l'utilisation de la technologie pour résoudre les problèmes et créer de la valeur"
          website="Sites web"
          ecommerce="E-commerce"
          webMobileApps="Applications web et mobiles"
          apiIntegrations="Intégrations API et tierces"
          devops="DevOps"
        />
        <Newsletter
          title="Discutons de la façon dont nous pouvons collaborer"
          subTitle="Prêt à démarrer votre projet ? N'hésitez pas à nous contacter. Notre équipe d'experts est là pour vous aider à donner vie à vos projets numériques. "
        />
        <ContactInformation
          title="CONTACTEZ-NOUS, VOUS NE SEREZ PAS DÉÇU"
          subTitle="N'hésitez pas à nous contacter ; nous serons ravis de discuter plus en détail de vos besoins et de vos objectifs. Contactez-nous dès aujourd'hui et engageons une conversation !"
          data={contactDatafr}
        />
        <Footer data={FooterDatafr} />
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
