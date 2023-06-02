import style from "./NavBar.module.css";

export const NavBar = () => {
  // ...
  return (
    <div>
      <ul className={style.navList}>
        <li className={style.navItem}>Home</li>
        <li className={style.navItem}>CV</li>
        <li className={style.navItem}>Portfolio</li>
        <li className={style.navItem}>Contacts</li>
      </ul>
    </div>
  );
};
