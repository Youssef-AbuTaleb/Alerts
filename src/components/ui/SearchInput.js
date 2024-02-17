import classes from "./SearchInput.module.css";
import searchIcon from "../../assets/svg/general/search.svg";
import searchIconSmall from "../../assets/svg/general/search-sm.svg";

function SearchInput({ size, placeholder, className }) {
  // SMALL SEARCH INPUT
  if (size === "small")
    return (
      <div className={classes.input}>
        <input placeholder={placeholder} style={{ height: "2.7rem" }} />
        <img src={searchIconSmall} alt="search" />
      </div>
    );

  // Normal SEARCH INPUT
  return (
    <div className={classes.input}>
      <input placeholder={placeholder} style={{ height: "3.8rem" }} />
      <img src={searchIcon} alt="search" />
    </div>
  );
}

export default SearchInput;
