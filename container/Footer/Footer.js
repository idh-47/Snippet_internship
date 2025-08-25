import React from "react";
import Link from "next/link";
import Logo from "../../components/logo/Logo";
import FooterLinkItem from "../../components/Footer/FooterLinkItem.jsx";

const Footer = (props) => {
  return (
    <div className="footer-section section footer-bg-color">
      <div className="container">
        <div className="row mb-lg-14 mb-md-10 mb-6">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 col-12 mb-6">
            <div className="footer-widget">
              <div className="footer-logo">
                <Logo
                  image={`${process.env.PUBLIC_URL}/images/logo/snippet-logo-2.png`}
                />
              </div>
              <div className="footer-widget-content">
                <div className="content">
                  <p>
                    <Link href="/">(+212) 663-212-790</Link>
                  </p>
                  <p>
                    <Link href="/">contact@snippet.ma</Link>{" "}
                  </p>
                </div>
                <div className="footer-social-inline">
                  <a href="#">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/snippet-co">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {props.data &&
            props.data.map((single, key) => {
              return (
                <div
                  key={key}
                  className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mb-6"
                >
                  <FooterLinkItem data={single} key={key} />
                </div>
              );
            })}
        </div>

        <div className="row">
          <div className="col">
            <p className="copyright">
              &copy; {new Date().getFullYear()} <strong>Snippet</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
