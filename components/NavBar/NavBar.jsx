import Link from "next/link";
import URLs from "../../constants/urls";

const NavBar = () => {
  return (
    <nav className="site-main-menu">
      <ul>
        <li>
          <Link href={URLs.home}>
            <span className="menu-text">Home</span>
          </Link>
        </li>
        <li>
          <Link href={URLs.about}>
            <span className="menu-text">About Us</span>
          </Link>
        </li>
        <li className="has-children">
          <Link href={URLs.services}>
            <span className="menu-text">Our Services</span>
          </Link>
          <span className="menu-toggle">
            <i className="far fa-angle-down"></i>
          </span>
          <span className="menu-toggle">
            <i className="far fa-angle-down"></i>
          </span>
          <ul className="sub-menu">
            <li>
              <Link href={URLs.servicesConsulting}>
                <span className="menu-text">Consulting</span>
              </Link>
            </li>
            <li>
              <Link href={URLs.servicesDesign}>
                <span className="menu-text">UX/UI Design</span>
              </Link>
            </li>
            <li>
              <Link href={URLs.servicesDevelopment}>
                <span className="menu-text">Development</span>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href={URLs.contact}>
            <span className="menu-text">Contact Us</span>
          </Link>
        </li>
        <li>
          <a href="tel:212663212790">
            <span className="menu-text">(+212) 663-212-790</span>
          </a>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default NavBar;
