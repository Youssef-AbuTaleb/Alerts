import classes from "./AlertDetails.module.css";

function AlertDetails({ item, visibleDetails }) {
  return (
    <div
      className={`${classes.container} ${visibleDetails ? classes.show : ""}`}
    >
      <p>
        <span className={classes.bold}>${item.field_1}</span> just announced an
        acquisition of <span className={classes.bold}>$NFLX</span> at{" "}
        <span className={classes.bold}>${item.field_2} B.</span>
      </p>
      <p>
        This is an <span className={classes.anchor}>${item.field_4}</span>{" "}
        opportunity, with the max gain being %{item.field_3} if the deal closes,
        but the possible risk is %{item.field_3} if the deal fails, if the deal
        success is % and therefore the recommended play is{" "}
        <span className={classes.anchor}>long/short</span> $ABC
      </p>
    </div>
  );
}

export default AlertDetails;
