import Button from "../ui/Button";
import classes from "./ButtonsFilters.module.css";
import FilterTitle from "./FilterTitle";
function ButtonsFilters() {
  return (
    <div className={classes.container}>
      <div className={classes.btns}>
        <FilterTitle title="Startegy" />
        <Button position="up" type="button" size="small">
          Big Option Buys
        </Button>
        <Button type="button" size="small">
          Merger Arbitrage
        </Button>
        <Button position="down" type="button" size="small">
          Short Reports
        </Button>
      </div>
      <div className={classes.btns}>
        <FilterTitle title="Asset" />
        <Button position="up" type="button" size="small">
          Stocks
        </Button>
        <Button type="button" size="small">
          Options
        </Button>
        <Button position="down" type="button" size="small">
          Futures
        </Button>
      </div>
    </div>
  );
}

export default ButtonsFilters;
