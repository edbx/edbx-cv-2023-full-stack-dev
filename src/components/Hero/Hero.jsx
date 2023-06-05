import style from "./Hero.module.css";

export const Hero = () => {
  // ..
  return (
    <section className={style.hero}>
      <div className={style.backTitle1}>Front-end Developer</div>
      <div className={style.backTitle2}>Back-end Developer</div>
      <p className={style.preHeading}>Hello, my name is</p>
      <h1 className={style.heading}>Eduard Bolma</h1>
      <p className={style.textAbout}>
        I'm highly skilled and motivated Front End Developer with a passion for
        creating intuitive and visually appealing web applications. Offering
        expertise in JavaScript, Node.js, React, Git, Scrum, HTML5, CSS3, and
        Express. Committed to delivering high-quality code and exceptional user
        experiences. Seeking opportunities to contribute my technical skills and
        creativity to a dynamic development team.
      </p>
    </section>
  );
};
