import style from "./Button.module.css";
// import style from "../App.module.css";

const Button = ({ btn }) => {
  return (
    <>
      <button className={style.button}>{btn}</button>
    </>
  );
};

export default Button;
