import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import ProgrammerPana from "../../assets/Programmer-pana.svg";
import { NavHashLink } from "react-router-hash-link";
import Hello from "../../assets/Hello.gif";

export type HeroProps = {
  name: string;
  role: string;
  yearsOfExperience: number;
  socialMedias: Array<{
    id: number | string;
    link: string;
    src: any;
    alt: string;
  }>;
};

export function Hero({
  name,
  role,
  yearsOfExperience,
  socialMedias,
}: HeroProps) {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>{name}</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>{role}</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">
            Over {yearsOfExperience} Years of Experience
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            {socialMedias.map((media) => (
              <a
                key={media.id}
                href={media.link}
                target="_blank"
                rel="noreferrer"
              >
                <img src={media.src} alt={media.alt} />
              </a>
            ))}
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={ProgrammerPana} alt="programmer" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
