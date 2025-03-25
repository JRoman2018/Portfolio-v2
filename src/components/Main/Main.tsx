import Particles, { IOptions, RecursivePartial } from "react-tsparticles";
import { Container } from "./styles";
import { Hero, HeroProps } from "../Hero/Hero";
import { About, AboutProps } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Experiences } from "../Experiences/Experiences";

export type MainProps = {
  particleOptions: RecursivePartial<IOptions>;
} & HeroProps &
  AboutProps;

export function Main({
  particleOptions,
  name,
  role,
  yearsOfExperience,
  socialMedias,
  aboutMe,
}: MainProps) {
  return (
    <Container>
      <Particles id="tsparticles" options={particleOptions} />
      <Hero
        name={name}
        role={role}
        yearsOfExperience={yearsOfExperience}
        socialMedias={socialMedias}
      />
      <About aboutMe={aboutMe} name={name} />
      <Experiences />
      <Contact />
    </Container>
  );
}
