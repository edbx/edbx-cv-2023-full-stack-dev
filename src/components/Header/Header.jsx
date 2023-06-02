import Logo from "../Logo";
import NavBar from "../NavBar";
import style from "./Header.module.css";

export const Header = () => {
  // ..
  return (
    <header className={style.header}>
      <Logo />
      <NavBar />
    </header>
  );
};
