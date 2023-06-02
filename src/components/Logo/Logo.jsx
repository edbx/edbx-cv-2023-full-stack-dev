import style from "./Logo.module.css";
import { ReactComponent as EdbxLogo } from "../../media/svg/logo-arrow.svg";

export const Logo = () => {
  return (
    <div className={style.logo}>
      <EdbxLogo className={style.edbxLogo} />
      <span className={style.firstName}>Eduard</span>
      <span className={style.secondName}>Bolma</span>
    </div>
  );
};
