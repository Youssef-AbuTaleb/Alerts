import classes from "./SideBar.module.css";

import userImg from "../../assets/svg/user.svg";
import logo from "../../assets/imgs/main-logo.png";
import alertsIcon from "../../assets/svg/side-bar/alerts.svg";
import trainingIcon from "../../assets/svg/side-bar/training.svg";
import automationIcon from "../../assets/svg/side-bar/automation.svg";
import portfolioIcon from "../../assets/svg/side-bar/portfolio.svg";
import trading from "../../assets/svg/side-bar/trading.svg";

function SideBar() {
  const navItems = [
    { title: "alerts", svgSrc: alertsIcon },
    { title: "training", svgSrc: trainingIcon },
    { title: "automation", svgSrc: automationIcon },
    { title: "portfolio", svgSrc: portfolioIcon },
    { title: "trading", svgSrc: trading },
  ];

  return (
    <nav className={classes.nav}>
      <img className={classes.logo} alt="logo" src={logo} />

      <ul className={classes["nav-items"]}>
        {navItems.map((item) => (
          <li
            className={`${classes["nav-item"]} ${
              item.title === "alerts" || item.title === "training"
                ? classes.active
                : ""
            }`}
            key={item.title}
          >
            <img src={item.svgSrc} alt={item.title} />
            <p>{item.title}</p>
          </li>
        ))}
      </ul>

      <div className={classes.footer}>
        <div className={classes.user}>
          <img src={userImg} alt="user_img" />

          <div>
            <p>Moni Roy</p>
            <p>Beginner</p>
          </div>
        </div>

        <p className={classes.copyright}>Street Suite. 2.0</p>
      </div>
    </nav>
  );
}

export default SideBar;
