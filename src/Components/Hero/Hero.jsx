import React from "react";
import styles from "./HeroStyles.module.css";
import passphoto_white from "../../assets/passphoto_white-modified.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinlight from "../../assets/linkedin-light.svg";
import linkedindark from "../../assets/linkedin-dark.svg";
import githublight from "../../assets/github-light.svg";
import githubdark from "../../assets/github-dark.svg";
import { useTheme } from "../../common/ThemeContext";

export default function Hero() {
  const { theme, toggleTheme } = useTheme();
  const linkedinlogo = theme === "light" ? linkedinlight : linkedindark;
  const Githublogo = theme === "light" ? githublight : githubdark;
  const Themeicon = theme === "light" ? sun : moon;
  return (
    <>
      <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img
            className="colorMode"
            src={Themeicon}
            alt="Color mode Icon"
            onClick={toggleTheme}
          ></img>
          <img
            className={styles.hero}
            src={passphoto_white}
            alt="Profile-picture of Venkata Ashrith"
          />
        </div>

        <div className={styles.info}>
          <h2>
            Venkata Ashrith <br /> Shekalla
          </h2>
          <h3>Tech Entusiast <br /> Full Stack Developer</h3>
          <span>
            <a
              href="https://www.linkedin.com/in/venkata-ashrith-shekalla"
              target="_blank"
            >
              <img src={linkedinlogo}></img>
            </a>
            <a href="https://github.com/VenkataAshrith" target="_blank">
              <img src={Githublogo}></img>
            </a>
          </span>
          <p className={styles.description}>
            Hey there! I'm Venkata Ashrith, Welcome to my portfolio!
          </p>
          <a
            href="https://drive.google.com/file/d/1ITKcnpeXDgTfxWMr9aa-hpAfolgkc-Uk/view?usp=drive_link"
            download
          >
            <button className="hover">Resume</button>
          </a>
        </div>
      </section>
    </>
  );
}
