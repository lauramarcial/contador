import { useState } from "react";

function App() {
  const [cuenta, setCuenta] = useState(0);
  const [paso, setPaso] = useState (1);

  const handleMinusClick = () => {
    console.log(paso);
    setCuenta(cuenta - paso);
  };
const handleResetClick = () => {
  setCuenta(0);
  setPaso(1);
}
const handlePlusClick = () => {
  setCuenta(cuenta + paso);
}

const handleInputChange = (Event) => {
  setPaso(Number(e.target.value));
};



return(
<div className="App">
  <h3>contador</h3>
  <hr />
  <h2 className="text-center">{cuenta}</h2>
  <hr />
</div
style = {{
  display: "flex",
  justifyContent: "flex-end",
  marginRight: "5px",
}}
>







)







}

export default App;
