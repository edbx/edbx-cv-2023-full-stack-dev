import { useState } from "react";

import Logo from "../Logo";
import NavBar from "../NavBar";
import { ReactComponent as BurgerMenu } from "../../media/icons/icon-burger-menu.svg";
import { ReactComponent as CloseMenu } from "../../media/icons/icon-close.svg";

import style from "./Header.module.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <header className={style.header}>
      <Logo />
      <div className={style.mobile}>
        {isOpen && (
          <div className={style.burgerMenu}>
            <NavBar />
          </div>
        )}
        {isOpen ? (
          <CloseMenu className={style.closeIcon} onClick={handleBurgerClick} />
        ) : (
          <BurgerMenu
            className={style.burgerIcon}
            onClick={handleBurgerClick}
          />
        )}
      </div>
    </header>
  );
};
