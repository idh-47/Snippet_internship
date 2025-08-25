import Link from "next/link";
import { URLs, URLsFr } from "../../constants/urls";
import LanguageSwitcher from "./languageSwitcher";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NavBar = (props) => {
  const router = useRouter();
  const [isFrench, setIsFrench] = useState(false);

  useEffect(() => {
    setIsFrench(router.asPath.startsWith("/fr"));
  }, [router.asPath]);

  const currentURLs = isFrench ? URLsFr : URLs;
  return (
    <nav className="site-main-menu">
      <ul>
        <li>
          <Link href={currentURLs.home}>
            <span className="menu-text">{props.home}</span>
          </Link>
        </li>
        <li>
          <Link href={currentURLs.about}>
            <span className="menu-text">{props.about}</span>
          </Link>
        </li>
        <li className="has-children">
          <Link href={currentURLs.services}>
            <span className="menu-text">{props.services}</span>
          </Link>
          <span className="menu-toggle">
            <i className="far fa-angle-down"></i>
          </span>
          <ul className="sub-menu">
            <li>
              <Link href={currentURLs.servicesConsulting}>
                <span className="menu-text">{props.consulting}</span>
              </Link>
            </li>
            <li>
              <Link href={currentURLs.servicesDesign}>
                <span className="menu-text">{props.design}</span>
              </Link>
            </li>
            <li>
              <Link href={currentURLs.servicesDevelopment}>
                <span className="menu-text">{props.development}</span>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href={currentURLs.contact}>
            <span className="menu-text">{props.contact}</span>
          </Link>
        </li>
        <li>
          <a href="tel:212663212790">
            <span className="menu-text">(+212) 663-212-790</span>
          </a>
        </li>
        <li className="language-switcher-item">
          <LanguageSwitcher />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
