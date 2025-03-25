import Resume from "../assets/Jose_Roman_resume.pdf";
import htmlIcon from "../assets/html-icon.svg";
import cssIcon from "../assets/css-icon.svg";
import sassIcon from "../assets/sass-icon.svg";
import jsIcon from "../assets/js-icon.svg";
import nodeIcon from "../assets/node-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import typescriptIcon from "../assets/typescript-icon.svg";
import vueIcon from "../assets/vue-icon.svg";
import boostrapIcon from "../assets/bootstrap-icon.svg";
import gitIcon from "../assets/git-icon.svg";
import jestIcon from "../assets/jest-icon.svg";
import materialUiIcon from "../assets/material-ui-icon.svg";
import { HeaderProps } from "../components/Header/Header";
import { MainProps } from "../components/Main/Main";
import linkedin from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";
import whatsapp from "../assets/whatsapp.svg";
import telegram from "../assets/telegram.svg";
import { FooterProps } from "../components/Footer/Footer";

const name = "José Román";

const socialMedias = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/jos%C3%A9-rom%C3%A1n-5497a1194/",
    alt: "Linkedin",
    src: linkedin,
  },
  {
    id: 2,
    link: "https://github.com/JRoman2018",
    alt: "GitHub",
    src: githubIcon,
  },
  {
    id: 3,
    link: "https://api.whatsapp.com/send/?phone=%2B8299623287&text=Hello+José",
    alt: "Whatsapp",
    src: whatsapp,
  },
  {
    id: 3,
    link: "https://t.me/JoseRoman1994",
    alt: "Telegram",
    src: telegram,
  },
];

export const technologiesSvg = [
  htmlIcon,
  cssIcon,
  sassIcon,
  jsIcon,
  nodeIcon,
  reactIcon,
  typescriptIcon,
  vueIcon,
  boostrapIcon,
  materialUiIcon,
  gitIcon,
  jestIcon,
];

export const headerProps: HeaderProps = {
  name,
  resume: Resume,
};

export const mainProps: MainProps = {
  particleOptions: {
    fullScreen: {
      enable: true,
      zIndex: 1,
    },
    detectRetina: true,
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onDiv: {
          elementId: "repulse-div",
          enable: false,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: "bubble",
          parallax: {
            enable: false,
            force: 60,
            smooth: 10,
          },
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 2,
        },
        connect: {
          distance: 80,
          lineLinked: {
            opacity: 0.5,
          },
          radius: 60,
        },
        grab: {
          distance: 400,
          lineLinked: {
            opacity: 1,
          },
        },
        push: {
          quantity: 2,
        },
        remove: {
          quantity: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      lineLinked: {
        blink: false,
        color: "#000",
        consent: false,
        distance: 150,
        enable: false,
        opacity: 0.4,
        width: 1,
      },
      move: {
        attract: {
          enable: false,
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        bounce: false,
        direction: "none",
        enable: true,
        outMode: "out",
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        limit: 20,
        value: 15,
      },
      opacity: {
        animation: {
          enable: true,
          minimumValue: 0.2,
          speed: 1,
          sync: false,
        },
        random: true,
        value: 1,
      },
      rotate: {
        animation: {
          enable: true,
          speed: 5,
          sync: false,
        },
        direction: "random",
        random: true,
        value: 0,
      },
      shape: {
        character: {
          fill: false,
          font: "Verdana",
          style: "",
          value: "*",
          weight: "400",
        },
        image: technologiesSvg.map((technologySvg) => ({
          src: technologySvg,
          width: 20,
          height: 20,
        })),
        polygon: {
          sides: 5,
        },
        stroke: {
          color: "#000000",
          width: 0,
        },
        type: "image",
      },
      size: {
        animation: {
          enable: false,
          minimumValue: 0.1,
          speed: 40,
          sync: false,
        },
        random: false,
        value: 16,
      },
    },
    polygon: {
      draw: {
        enable: false,
        lineColor: "#ffffff",
        lineWidth: 0.5,
      },
      move: {
        radius: 10,
      },
      scale: 1,
      url: "",
    },
    background: {
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
  },
  name,
  role: "Full Stack Developer",
  yearsOfExperience: 5,
  socialMedias,
  aboutMe: {
    paragraph1: (
      <p>
        I am a <strong>Senior Frontend Developer</strong> with over{" "}
        <strong>5 years of experience</strong> building scalable,
        high-performance web applications. Passionate about crafting{" "}
        <strong>intuitive, user-friendly interfaces</strong>, I specialize in
        <strong>React, Next.js, TypeScript</strong>, and modern UI libraries
        like Tailwind CSS and Material UI.
      </p>
    ),
    paragraph2: (
      <>
        <p>
          With a strong foundation in <strong>JavaScript, HTML, and CSS</strong>
          , I have worked on a variety of projects, from complex SaaS platforms
          to dynamic e-commerce solutions. My expertise includes:
        </p>
        <ul>
          <li>
            ✅{" "}
            <strong>Building and optimizing responsive web applications</strong>
          </li>
          <li>
            ✅{" "}
            <strong>
              State management with Redux, Zustand, and React Context
            </strong>
          </li>
          <li>
            ✅{" "}
            <strong>
              Performance optimization & accessibility best practices
            </strong>
          </li>
          <li>
            ✅ <strong>API integrations with REST and GraphQL</strong>
          </li>
          <li>
            ✅{" "}
            <strong>
              esting with Jest, React Testing Library, and Cypress
            </strong>
          </li>
        </ul>
      </>
    ),
    paragraph3: (
      <p>
        I thrive in fast-paced environments, collaborating closely with
        designers, backend developers, and stakeholders to bring innovative
        ideas to life. Always eager to{" "}
        <strong>learn and adopt the latest web technologies</strong>, I stay
        ahead of industry trends to create modern, efficient, and maintainable
        code.
      </p>
    ),
    mainSkills: [
      { id: 1, src: reactIcon, alt: "React" },
      { id: 2, src: jestIcon, alt: "Jest" },
      { id: 3, src: typescriptIcon, alt: "Typescript" },
      { id: 4, src: vueIcon, alt: "Vue" },
      { id: 5, src: gitIcon, alt: "Git" },
      { id: 6, src: nodeIcon, alt: "Node" },
      { id: 7, src: jsIcon, alt: "JavaScript" },
      { id: 8, src: materialUiIcon, alt: "Material-UI" },
      { id: 9, src: boostrapIcon, alt: "Bootstrap" },
    ],
  },
};

export const footerProps: FooterProps = { socialMedias };
