import { Container } from "./styles";
import VinayakSingh from "../../assets/JoseRoman.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import { ReactElement } from "react";

export type AboutProps = {
  aboutMe: {
    paragraph1: ReactElement;
    paragraph2: ReactElement;
    paragraph3: ReactElement;
    mainSkills: Array<{
      id: number | string;
      src: any;
      alt: string;
    }>;
  };
  name: string;
};

export function About({ aboutMe, name }: AboutProps) {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          {aboutMe.paragraph1}
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.3 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          {aboutMe.paragraph2}
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          {aboutMe.paragraph3}
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          {aboutMe.mainSkills.map((skill, index) => (
            <div key={skill.id} className="hability">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={(0.13 + index) * 1000}
              >
                <img src={skill.src} alt={skill.alt} />
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={VinayakSingh} alt={name} />
        </ScrollAnimation>
      </div> */}
    </Container>
  );
}
