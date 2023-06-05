import style from "./Logo.module.css";
import { ReactComponent as EdbxLogo } from "../../media/icons/logo-arrow.svg";

export const Logo = () => {
  return (
    <div className={style.logo}>
      <EdbxLogo className={style.edbxLogo} />
      <div className={style.nameLogo}>
        <p className={style.name}>
          <span className={style.firstName}>Eduard</span> Bolma
        </p>
      </div>
    </div>
  );
};
