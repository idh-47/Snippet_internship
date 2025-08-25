import { useEffect, useRef } from "react";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import NewsletterForm from "../../components/Newsletter/NewsletterForm.jsx";
import Parallax from "parallax-js";
import NextImage from "next/image";
import bg from "../../public/images/bg/newsletter.jpg";
import { CldImage } from "next-cloudinary";

export async function getStaticProps() {
  const newsletterBlur = getCldImageUrl({
    src: "newsletter_xb9zt7",
    quality: 10,
    blur: 1000,
  });

  return {
    props: {
      newsletterBlur,
    },
  };
}

const Newsletter = (newsletterBlur) => {
  const sceneEl = useRef(null);
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);
  return (
    <>
      <div className="section section-bg-image section-padding-t110-b120 newsletter-section overlay-two">
        <CldImage
          src="newsletter_xb9zt7"
          alt=""
          fill
          blurDataURL={newsletterBlur}
          blur
          loading="lazy"
          style={{ objectFit: "cover" }}
          quality={100}
          className="background-image"
        />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="newsletter-content"></div>
              <SectionTitle
                titleOption="color-light text-center"
                title="Let's discuss how we can work together"
                subTitle="Ready to start your project? We would love to hear from you. Our team of experts is ready to help you bring your digital projects to life. "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="shape shape-1" id="scene" ref={sceneEl}>
        <span data-depth="1">
          <NextImage
            src="/images/shape-animation/newsletter-shape.png"
            alt=""
            width={340}
            height={74}
          />
        </span>
      </div>
    </>
  );
};

export default Newsletter;
