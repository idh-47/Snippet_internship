import { useEffect } from "react";
import Aos from "aos";
import "swiper/css";
import "aos/dist/aos.css";
import "./../styles/scss/style.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export default function App({ Component, pageProps }) {
  const GOOGLE_GA_ID = process.env.NEXT_PUBLIC_GOOGLE_GA_ID;
  const GOOGLE_GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_GTM_ID;
  useEffect(() => {
    Aos.init({
      offset: 80,
      duration: 1000,
      once: true,
      easing: "ease",
    });
    Aos.refresh();
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
      <GoogleAnalytics gaId={GOOGLE_GA_ID} />
      <GoogleTagManager gtmId={GOOGLE_GTM_ID} />
    </>
  );
}
