// import { useRouter } from "next/router";
// import { useState } from "react";

// const pathMap = {
//   "": "fr",
//   "about-us": "Qui-nous-sommes",
//   contact: "fr",
//   services: "fr",
// };
// const LanguageSwitcher = () => {
//   const router = useRouter();
//   const [isOpen, setIsOpen] = useState(false);

//   const currentLang = router.asPath.startsWith("/fr") ? "fr" : "en";

//   const languages = {
//     en: { code: "en", name: "English", flag: "🇺🇸" },
//     fr: { code: "fr", name: "Français", flag: "🇫🇷" },
//   };

//   const handleLanguageChange = (langCode) => {
//     const currentPath = router.asPath;
//     let newPath;

//     if (langCode === "fr") {
//       if (currentPath.startsWith("/fr")) {
//         newPath = currentPath;
//       } else {
//         newPath = `/fr${currentPath === "/" ? "" : currentPath}`;
//       }
//     } else {
//       if (currentPath.startsWith("/fr")) {
//         newPath = currentPath.replace("/fr", "") || "/";
//       } else {
//         newPath = currentPath;
//       }
//     }

//     router.push(newPath);
//     setIsOpen(false);
//   };

//   // const LanguageSwitcher = () => {
//   //   const router = useRouter();
//   //   const [isOpen, setIsOpen] = useState(false);

//   //   const currentLang = router.asPath.startsWith("/fr") ? "fr" : "en";

//   //   const languages = {
//   //     en: { code: "en", name: "English", flag: "🇺🇸" },
//   //     fr: { code: "fr", name: "Français", flag: "🇫🇷" },
//   //   };

//   //   const handleLanguageChange = (langCode) => {
//   //     const currentPath = router.asPath;
//   //     let newPath;

//   //     if (langCode === "fr") {
//   //       if (currentPath.startsWith("/fr")) {
//   //         newPath = currentPath;
//   //       } else {
//   //         newPath = `/fr${currentPath === "/" ? "" : currentPath}`;
//   //       }
//   //     } else {
//   //       if (currentPath.startsWith("/fr")) {
//   //         newPath = currentPath.replace("/fr", "") || "/";
//   //       } else {
//   //         newPath = currentPath;
//   //       }
//   //     }

//   //     router.push(newPath);
//   //     setIsOpen(false);
//   //   };

//   return (
//     <div className="language-switcher">
//       <button
//         className="language-toggle"
//         onClick={() => setIsOpen(!isOpen)}
//         aria-label="Switch Language"
//       >
//         <span className="flag">{languages[currentLang].flag}</span>
//         <span className="lang-code">
//           {languages[currentLang].code.toUpperCase()}
//         </span>
//         <span className={`arrow ${isOpen ? "open" : ""}`}>
//           <i className="far fa-angle-down"></i>
//         </span>
//       </button>

//       {isOpen && (
//         <div className="language-dropdown">
//           {Object.values(languages).map((lang) => (
//             <button
//               key={lang.code}
//               className={`language-option ${
//                 currentLang === lang.code ? "active" : ""
//               }`}
//               onClick={() => handleLanguageChange(lang.code)}
//             >
//               <span className="flag">{lang.flag}</span>
//               <span className="lang-name">{lang.name}</span>
//             </button>
//           ))}
//         </div>
//       )}

//       <style jsx>{`
//         .language-switcher {
//           position: relative;
//           display: inline-block;
//         }

//         .language-toggle {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           background: none;
//           border: none;
//           color: var(--clr-white);
//           font-size: 14px;
//           font-weight: 500;
//           padding: 8px 12px;
//           cursor: pointer;
//           border-radius: 6px;
//           transition: all 0.3s ease;
//           min-width: 80px;
//         }

//         .language-toggle:hover {
//           background-color: rgba(255, 255, 255, 0.1);
//           color: var(--clr-primary);
//         }

//         .flag {
//           font-size: 16px;
//         }

//         .lang-code {
//           font-size: 13px;
//           font-weight: 600;
//           letter-spacing: 0.5px;
//         }

//         .arrow {
//           font-size: 10px;
//           transition: transform 0.3s ease;
//         }

//         .arrow.open {
//           transform: rotate(180deg);
//         }

//         .language-dropdown {
//           position: absolute;
//           top: 100%;
//           right: 0;
//           background: var(--clr-white);
//           border-radius: 8px;
//           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
//           z-index: 1000;
//           min-width: 140px;
//           overflow: hidden;
//           margin-top: 8px;
//           border: 1px solid rgba(0, 0, 0, 0.08);
//         }

//         .language-dropdown::before {
//           content: "";
//           position: absolute;
//           top: -6px;
//           right: 20px;
//           width: 12px;
//           height: 12px;
//           background: var(--clr-white);
//           border-top: 1px solid rgba(0, 0, 0, 0.08);
//           border-left: 1px solid rgba(0, 0, 0, 0.08);
//           transform: rotate(45deg);
//         }

//         .language-option {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           width: 100%;
//           padding: 12px 16px;
//           background: none;
//           border: none;
//           color: var(--clr-body);
//           font-size: 14px;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           text-align: left;
//         }

//         .language-option:hover {
//           background-color: #f8f9fa;
//           color: var(--clr-primary);
//         }

//         .language-option.active {
//           background-color: var(--clr-primary);
//           color: var(--clr-white);
//         }

//         .language-option.active:hover {
//           background-color: var(--clr-primary);
//           color: var(--clr-white);
//         }

//         .lang-name {
//           font-weight: 500;
//         }

//         /* Responsive */
//         @media (max-width: 991px) {
//           .language-toggle {
//             padding: 6px 10px;
//             font-size: 13px;
//           }

//           .language-dropdown {
//             min-width: 120px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default LanguageSwitcher;

import { useRouter } from "next/router";
import { useState } from "react";

const pathMap = {
  "": "",
  "about-us": "Qui-nous-sommes",
  contact: "contact",
  services: "services",
  "services/consulting": "services/consultation",
  "services/development": "services/developpement",
  "services/ux-ui-design": "services/ux-ui-design",
  api: "api",
};

const reversePathMap = Object.entries(pathMap).reduce((acc, [en, fr]) => {
  acc[fr] = en;
  return acc;
}, {});

const LanguageSwitcher = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = router.asPath.startsWith("/fr") ? "fr" : "en";

  const languages = {
    en: { code: "en", name: "English", flag: "🇺🇸" },
    fr: { code: "fr", name: "Français", flag: "🇫🇷" },
  };

  const handleLanguageChange = (langCode) => {
    const currentPath = router.asPath;
    let newPath;

    if (langCode === "fr") {
      if (currentPath.startsWith("/fr")) {
        // Already on French, no change needed
        newPath = currentPath;
      } else {
        // Switch from English to French
        const englishPath = currentPath === "/" ? "" : currentPath.substring(1);
        const frenchPath = pathMap[englishPath] || englishPath;
        newPath = `/fr${frenchPath ? `/${frenchPath}` : ""}`;
      }
    } else {
      if (currentPath.startsWith("/fr")) {
        const frenchPath = currentPath.substring(3) || "";
        const cleanFrenchPath = frenchPath.startsWith("/")
          ? frenchPath.substring(1)
          : frenchPath;
        const englishPath = reversePathMap[cleanFrenchPath] || cleanFrenchPath;
        newPath = englishPath ? `/${englishPath}` : "/";
      } else {
        newPath = currentPath;
      }
    }

    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      <button
        className="language-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Switch Language"
      >
        <span className="flag">{languages[currentLang].flag}</span>
        <span className="lang-code">
          {languages[currentLang].code.toUpperCase()}
        </span>
        <span className={`arrow ${isOpen ? "open" : ""}`}>
          <i className="far fa-angle-down"></i>
        </span>
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {Object.values(languages).map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${
                currentLang === lang.code ? "active" : ""
              }`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className="flag">{lang.flag}</span>
              <span className="lang-name">{lang.name}</span>
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        .language-switcher {
          position: relative;
          display: inline-block;
        }

        .language-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          color: var(--clr-white);
          font-size: 14px;
          font-weight: 500;
          padding: 8px 12px;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.3s ease;
          min-width: 80px;
        }

        .language-toggle:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: var(--clr-primary);
        }

        .flag {
          font-size: 16px;
        }

        .lang-code {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .arrow {
          font-size: 10px;
          transition: transform 0.3s ease;
        }

        .arrow.open {
          transform: rotate(180deg);
        }

        .language-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          background: var(--clr-white);
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          z-index: 1000;
          min-width: 140px;
          overflow: hidden;
          margin-top: 8px;
          border: 1px solid rgba(0, 0, 0, 0.08);
        }

        .language-dropdown::before {
          content: "";
          position: absolute;
          top: -6px;
          right: 20px;
          width: 12px;
          height: 12px;
          background: var(--clr-white);
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          border-left: 1px solid rgba(0, 0, 0, 0.08);
          transform: rotate(45deg);
        }

        .language-option {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 12px 16px;
          background: none;
          border: none;
          color: var(--clr-body);
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }

        .language-option:hover {
          background-color: #f8f9fa;
          color: var(--clr-primary);
        }

        .language-option.active {
          background-color: var(--clr-primary);
          color: var(--clr-white);
        }

        .language-option.active:hover {
          background-color: var(--clr-primary);
          color: var(--clr-white);
        }

        .lang-name {
          font-weight: 500;
        }

        /* Responsive */
        @media (max-width: 991px) {
          .language-toggle {
            padding: 6px 10px;
            font-size: 13px;
          }

          .language-dropdown {
            min-width: 120px;
          }
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;
