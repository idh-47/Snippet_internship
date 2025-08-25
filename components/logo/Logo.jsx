import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className="header-logo">
      <Link href="/">
        <Image
          className={styles.logo}
          src="/images/logo/snippet_logo_white.svg"
          alt="Snippet - Empower your digital journey"
          fill
          priority={true}
        />
      </Link>
    </div>
  );
};

Logo.propTypes = {
  image: PropTypes.string,
};

export default Logo;
