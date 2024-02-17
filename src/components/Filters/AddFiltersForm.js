import classes from "./AddFiltersForm.module.css";
import SearchInput from "../ui/SearchInput";
import IndustryFilters from "./IndustryFilters";
import CheckboxFilters from "./CheckboxFilters";
import ButtonsFilters from "./ButtonsFilters";
import Button from "../ui/Button";

function AddFiltersForm() {
  return (
    <form className={classes.container}>
      <div className={`${classes["add-filters"]} ${classes.card}`}>
        <h4 className={classes.title}>Stock</h4>

        <SearchInput
          size="small"
          placeholder="$ TICKER"
          className={classes.inp}
        />
        <IndustryFilters />
        <CheckboxFilters />
        <ButtonsFilters />
      </div>
      <Button size="large" type="button">
        Apply
      </Button>
    </form>
  );
}

export default AddFiltersForm;
