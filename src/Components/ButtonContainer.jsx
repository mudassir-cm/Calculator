import Button from "./Button";
import style from "./ButtonContainer.module.css";
// import style from "../App.module.css";

const ButtonContainer = () => {
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
  ];

  return (
    <>
      <div className={style.btnContainer}>
        {btnData.map((btn) => (
          <Button btn={btn}></Button>
        ))}
      </div>
    </>
  );
};

export default ButtonContainer;
