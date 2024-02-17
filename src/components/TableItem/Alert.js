import classes from "./Alert.module.css";

import AlertItem from "./AlertItem";
import AlertDetails from "./AlertDetails";
import { useState } from "react";

function Alert({ item }) {
  const [visibleDetails, setVisibleDetails] = useState(false);

  function toggleAlert() {
    setVisibleDetails((state) => !state);
  }
  return (
    <div className={classes["item-container"]}>
      <AlertItem
        visibleDetails={visibleDetails}
        onClick={toggleAlert}
        item={item}
      />
      <AlertDetails visibleDetails={visibleDetails} item={item} />
    </div>
  );
}

export default Alert;
