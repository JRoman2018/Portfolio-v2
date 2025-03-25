import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import instagramIcon from "../../assets/instagram.svg";

export type FooterProps = {
  socialMedias: Array<{
    id: number | string;
    link: string;
    src: any;
    alt: string;
  }>;
};
export function Footer({ socialMedias }: FooterProps) {
  return (
    <Container className="footer">
      <p>
        This Website was made with <img src={reactIcon} alt="React" />
      </p>
      <div className="social-media">
        {socialMedias.map((media) => (
          <a key={media.id} href={media.link} target="_blank" rel="noreferrer">
            <img src={media.src} alt={media.alt} />
          </a>
        ))}
      </div>
    </Container>
  );
}
