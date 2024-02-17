import RadioButton from "../ui/RadioButton";
import FilterTitle from "./FilterTitle";

import classes from "./CheckboxFilters.module.css";
function CheckboxFilters() {
  return (
    <div className={classes.row}>
      <div>
        <FilterTitle title="Market Cap" showIcon={true} />
        <div className={classes.filters}>
          <RadioButton groupId="market-cap" id="micro" label="Micro" />
          <RadioButton groupId="market-cap" id="small" label="Small" />
          <RadioButton groupId="market-cap" id="large" label="Large" />
        </div>
      </div>

      <div>
        <FilterTitle title="Risk Level" showIcon={true} />
        <div className={classes.filters}>
          <RadioButton groupId="risk-level" id="low risk" label="Micro" />
          <RadioButton groupId="risk-level" id="mid risk" label="Small" />
          <RadioButton groupId="risk-level" id="high risk" label="Large" />
        </div>
      </div>
    </div>
  );
}

export default CheckboxFilters;
