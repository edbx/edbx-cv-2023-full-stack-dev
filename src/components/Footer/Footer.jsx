import Logo from "../Logo";
import style from "./Footer.module.css";

export const Footer = () => {
  // ..
  return (
    <footer className={style.footer}>
      <Logo />
      <email>edbx.dev@gmail.com</email>
      <address>Milan, Italia</address>
    </footer>
  );
};
