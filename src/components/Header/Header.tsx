import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { useRef, useState } from "react";

export type HeaderProps = {
  name: string;
  resume: any;
};

export function Header({ name, resume }: HeaderProps) {
  const [isActive, setActive] = useState(false);
  const htmlRef = useRef<HTMLElement | null>(null);

  const toggleTheme = () => {
    if (!htmlRef.current) {
      htmlRef.current = document.documentElement; // Set ref to <html>
    }
    htmlRef.current.classList.toggle("light");
  };

  const closeMenu = () => {
    setActive(false);
  };

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>{name}</span>
        </HashLink>
        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label className="toggle" htmlFor="switch">
          Toggle
        </label>
        <nav className={isActive ? "active" : ""}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About me
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Project
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          <a href={resume} download className="button">
            Resume
          </a>
        </nav>
        <div
          aria-expanded={isActive ? "true" : "false"}
          aria-haspopup="true"
          aria-label={isActive ? "Close menu" : "Open menu"}
          className={isActive ? "menu active" : "menu"}
          onClick={() => {
            setActive(!isActive);
          }}
        ></div>
      </Router>
    </Container>
  );
}
