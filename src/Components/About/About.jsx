import React from "react";
import Styles from "./Aboutt.module.css";

const AboutMe = () => {

  return (
    <section id="aboutme" className={Styles.container}>
      <h2 className={Styles.sectionTitle}>About Me</h2>
      <p className={Styles.aboutmedescription}>
      Highly motivated computer science graduate with a solid foundation in programming and algorithms. Skilled in
Full Stack Development, Python Development, and UI/UX design. Passionate about solving complex problems and
bringing digital solutions to life.
      </p>
    </section>
  );
};

export default AboutMe;
