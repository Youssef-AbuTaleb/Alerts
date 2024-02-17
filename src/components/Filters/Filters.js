import AddFiltersForm from "./AddFiltersForm";
import classes from "./Filters.module.css";
import FiltersHeader from "./FiltersHeader";

function Filters() {
  return (
    <section className={classes.filters}>
      <FiltersHeader />
      <AddFiltersForm />
    </section>
  );
}

export default Filters;
