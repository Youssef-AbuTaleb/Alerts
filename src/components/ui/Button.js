import classes from "./Button.module.css";

function Button({ children, type, position, size }) {
  if (size === "small")
    return (
      <button className={`${classes.btn} ${classes[position]}`} type={type}>
        {children}
      </button>
    );
  if (size === "large")
    return (
      <button className={classes["btn-lg"]} type={type}>
        {children}
      </button>
    );
}

export default Button;
