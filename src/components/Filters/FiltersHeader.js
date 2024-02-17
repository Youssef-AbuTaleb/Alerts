import classes from "./FiltersHeader.module.css";
import crossIcon from "../../assets/svg/general/cross.svg";
function FiltersHeader() {
  return (
    <>
      <h3 className={classes.title}>Filters</h3>

      <div className={classes.header}>
        <p>Filters Applied</p>
        <p>Clear All</p>
      </div>

      <div className={`${classes["applied-filters"]} ${classes.card}`}>
        <p className={classes.tag}>
          <span>Real Estate</span>
          <img src={crossIcon} alt="close button" />
        </p>
      </div>
    </>
  );
}

export default FiltersHeader;
