import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  // ...
  return (
    <div className={style.navBar}>
      <ul className={style.navList}>
        <li className={style.navItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={style.navItem}>
          <Link to="/curriculum">CV</Link>
        </li>
        <li className={style.navItem}>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className={style.navItem}>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </div>
  );
};
