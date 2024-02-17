import AddFiltersForm from "./AddFiltersForm";
import FiltersHeader from "./FiltersHeader";

import classes from "./Filters.module.css";

function Filters({ visibleFilters, hideFilter }) {
  return (
    <section
      className={`${classes.filters} ${visibleFilters ? classes.show : ""}`}
    >
      <FiltersHeader hideFilter={hideFilter} />
      <AddFiltersForm />
    </section>
  );
}

export default Filters;
