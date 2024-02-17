import arrowDown from "../../assets/svg/general/down-arrow.svg";
import classes from "./FilterTitle.module.css";

function FilterTitle({ title, showIcon }) {
  return (
    <h4 className={classes.title}>
      {showIcon && <img src={arrowDown} alt="arrow down" />}
      <span>{title}</span>
    </h4>
  );
}

export default FilterTitle;
