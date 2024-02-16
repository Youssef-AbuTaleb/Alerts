import classes from "./Main.module.css";

import firstFieldIcon from "../../assets/svg/table/table-icon-1.svg";
import secondFieldIcon from "../../assets/svg/table/table-icon-2.svg";
import thirdFieldIcon from "../../assets/svg/table/table-icon-3.svg";
import fourthFieldIcon from "../../assets/svg/table/table-icon-4.svg";
import listData from "../../assets/json/listing-data.json";

function Main() {
  const icons = [
    firstFieldIcon,
    secondFieldIcon,
    thirdFieldIcon,
    fourthFieldIcon,
  ];

  return (
    <main className={classes.main}>
      <div className={classes.items}>
        {listData.map((item, index) => (
          <div className={classes.item} key={index}>
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
        ))}
      </div>
    </main>
  );
}

export default Main;
