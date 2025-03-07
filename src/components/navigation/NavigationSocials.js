import Linkedin from "../../assets/images/socials/linkedin-pink.svg";
import Github from "../../assets/images/socials/github-pink.svg";
import Codepen from "../../assets/images/socials/codepen-pink.svg";
import { React } from 'react';

const NavigationSocials = () => {
  return (
    <section className="navigation__socials">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Linkedin} alt="LinkedIn profile" />
      </a>
      <a
        href="https://github.com/matrluna0126?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Github} alt="GitHub" />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Codepen} alt="Codepen" />
      </a>
    </section>
  );
};

export default NavigationSocials;
