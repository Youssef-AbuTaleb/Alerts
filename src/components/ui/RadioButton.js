import classes from "./RadioButton.module.css";

function RadioButton({ label, groupId, id }) {
  return (
    <label htmlFor={id} className={classes.radio}>
      <input type="radio" id={id} name={groupId} />
      <span className={classes["radio-btn"]}></span>
      {label}
    </label>
  );
}

export default RadioButton;
