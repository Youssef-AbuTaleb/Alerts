import classes from "./Header.module.css";

import notificationIcon from "../../assets/svg/general/notifications.svg";
import searchIcon from "../../assets/svg/general/search.svg";
function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>
        <span></span>Alerts
      </h1>

      <div className={classes.input}>
        <input placeholder="Search By..." />
        <img src={searchIcon} alt="search" />
      </div>

      <div className={classes.notification}>
        <img src={notificationIcon} alt="notifications bell" />
        <span>6</span>
      </div>
    </header>
  );
}

export default Header;
