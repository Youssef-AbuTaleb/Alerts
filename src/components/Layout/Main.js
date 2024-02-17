import classes from "./Main.module.css";
import listData from "../../assets/json/listing-data.json";

import Alert from "../TableItem/Alert";

function Main() {
  return (
    <main className={classes.main}>
      <div className={classes.items}>
        {listData.map((item, index) => (
          <Alert item={item} key={index} id={index} />
        ))}
      </div>
    </main>
  );
}

export default Main;
