import style from "./Button.module.css";
// import style from "../App.module.css";

const Button = ({ btn, onButtonClick }) => {
  return (
    <>
      <button className={style.button} onClick={() => onButtonClick(btn)}>
        {btn}
      </button>
    </>
  );
};

export default Button;
