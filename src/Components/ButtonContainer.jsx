import Button from "./Button";
import style from "./ButtonContainer.module.css";
// import style from "../App.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  const btnData = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "=",
    ".",
    "c",
  ];

  return (
    <>
      <div className={style.btnContainer}>
        {btnData.map((btn) => (
          <Button btn={btn} onButtonClick={onButtonClick}></Button>
        ))}
      </div>
    </>
  );
};

export default ButtonContainer;
