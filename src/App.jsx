import style from "./App.module.css";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import { useState } from "react";

const App = () => {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (e) => {
    console.log(e);
    if (e === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else if (e === "c") {
      setCalVal("");
    } else {
      const val = calVal + e;
      setCalVal(val);
    }
  };

  return (
    <>
      <div className={style.calculator}>
        <Display display={calVal}></Display>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </>
  );
};

export default App;
