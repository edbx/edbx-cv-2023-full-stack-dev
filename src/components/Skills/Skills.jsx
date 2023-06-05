import style from "./Skills.module.css";

export const Skills = () => {
  // ..
  return (
    <section className={style.skills}>
      <h2 className={style.heading}>SkillSet</h2>
      {/* <ul className={style.list}>
        <li>Languages: JavaScript (ES6+), HTML5, CSS3</li>
        <li>Frameworks/Libraries: React, Node.js, Express.js</li>
        <li>Version Control: Git, GitHub</li>
        <li>Agile Methodologies: Scrum</li>
        <li>Tools: Webpack, Babel, ESLint</li>
        <li>Testing: Jest, Enzyme</li>
        <li>Design: Responsive Design, UI/UX Principles</li>
        <li>Database: MongoDB</li>
        <li>ther: RESTful APIs, JSON, AJAX, npm</li>
      </ul> */}

      <table>
        <tr>
          <td className={style.leftCol}>Languages:</td>
          <td>JavaScript (ES6+), HTML5, CSS3</td>
        </tr>
        <tr>
          <td className={style.leftCol}>Frameworks/Libraries:</td>
          <td>React, Node.js, Express.js</td>
        </tr>
        <tr>
          <td className={style.leftCol}>Version Control:</td>
          <td>Git, GitHub</td>
        </tr>
        <tr>
          <td className={style.leftCol}>Agile Methodologies:</td>
          <td>Scrums</td>
        </tr>
        <tr>
          <td className={style.leftCol}>Tools:</td>
          <td>Webpack, Babel, ESLint</td>
        </tr>
        <tr>
          <td className={style.leftCol}>Testing:</td>
          <td> Jest, Enzyme</td>
        </tr>
        <tr>
          <td className={style.leftCol}>Design:</td>
          <td>Responsive Design, UI/UX Principles</td>
        </tr>
        <tr>
          <td className={style.leftCol}>Database:</td>
          <td>MongoDB</td>
        </tr>
        <tr>
          <td className={style.leftCol}>Other</td>
          <td>RESTful APIs, JSON, AJAX, npm</td>
        </tr>
      </table>
      <p>
        I possess a strong technical skill set that includes expertise in
        various programming languages such as JavaScript (ES6+), HTML5, and
        CSS3, enabling me to develop dynamic and interactive web applications. I
        am well-versed in popular frameworks and libraries like React, Node.js,
        and Express.js, empowering me to build robust and scalable front-end
        solutions. With proficiency in version control systems like Git and
        GitHub, I am adept at managing code repositories and facilitating
        seamless collaboration within development teams. I am experienced in
        Agile methodologies, particularly Scrum, which allows me to work
        efficiently and deliver projects on time. Additionally, I am familiar
        with essential tools like Webpack, Babel, and ESLint, ensuring code
        optimization and maintainability. I have a strong understanding of
        testing frameworks like Jest and Enzyme, enabling me to implement
        comprehensive test suites for reliable code. Furthermore, my knowledge
        of responsive design principles and UI/UX principles allows me to create
        visually appealing and user-friendly interfaces. I have worked with
        MongoDB as a database solution and possess proficiency in handling
        RESTful APIs, JSON, AJAX, and npm for seamless data integration and
        communication.
      </p>
    </section>
  );
};
