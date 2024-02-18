import React from "react";
import "../index.css";
import img1 from "../assets/investment-calculator-logo.png";
import UserInput from "./UserInput";
import { useState } from "react";
import Results from "./Results";


function Header() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200, 
    expectedReturn: 6,
    duration: 10
  })

  const inputIsValid = userInput.duration >= 1
  const inputMore = userInput.duration > 100

  const handleGetValue = (inputIdentifier, newValue) =>{
    setUserInput((prevInput) =>{
      return{
        ...prevInput, 
        [inputIdentifier]: +newValue
      }
    })
  }
  return (
    <header id="header">
      <img src={img1} alt={img1} />
      <h1>Investment Calculator</h1>
      <UserInput onChangeInput={handleGetValue} userInput={userInput}/>
      {inputMore && <p className="center">Please enter a duraton less than 100</p>}
      {!inputIsValid && <p className="center">Please enter a duration greated than zero</p>}
      {!inputMore && inputIsValid &&  <Results input={userInput}/>}
    </header>
  );
}
export default Header;
