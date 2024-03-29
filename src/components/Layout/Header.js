import classes from "./Header.module.css";

import notificationIcon from "../../assets/svg/general/notifications.svg";
import SearchInput from "../ui/SearchInput";
function Header({ showFilter }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>
        <span></span>Alerts
      </h1>

      <SearchInput placeholder="Search By..." />

      <div className={classes.notification}>
        <img src={notificationIcon} alt="notifications bell" />
        <span>6</span>
      </div>

      <button className={classes["filter-btn"]} onClick={showFilter}>
        Filters
      </button>
    </header>
  );
}

export default Header;
