import classes from "./AlertItem.module.css";

import firstFieldIcon from "../../assets/svg/table/table-icon-1.svg";
import secondFieldIcon from "../../assets/svg/table/table-icon-2.svg";
import thirdFieldIcon from "../../assets/svg/table/table-icon-3.svg";
import fourthFieldIcon from "../../assets/svg/table/table-icon-4.svg";

function TableItem({ item, onClick, visibleDetails }) {
  const icons = [
    firstFieldIcon,
    secondFieldIcon,
    thirdFieldIcon,
    fourthFieldIcon,
  ];
  return (
    <div
      className={`${classes.item} ${visibleDetails ? classes.show : ""}`}
      onClick={onClick}
    >
      {Object.values(item).map((field, index) => (
        <div className={classes.item__field} key={index}>
          <img src={icons[index]} alt="field icon 4" />
          {field !== "low risk" && field !== "high risk" && (
            <span>{field}</span>
          )}
          {field === "low risk" && (
            <span style={{ color: "var(--orange)" }}>{field}</span>
          )}
          {field === "high risk" && (
            <span style={{ color: "var(--green)" }}>{field}</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default TableItem;
