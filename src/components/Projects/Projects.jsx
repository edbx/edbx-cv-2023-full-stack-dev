import style from "./Projects.module.css";

export const Projects = () => {
  // ..
  return (
    <section className={style.projects}>
      <h2>Projects</h2>
      <ul>
        <li>WebStudio</li>
        <li>Film search</li>
        <li>Contacts</li>
        <li>GooseTrack</li>
      </ul>
    </section>
  );
};
