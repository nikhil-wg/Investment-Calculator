import { useState } from "react";
import Header from "./components/Header"
import Reuslt from "./components/Result";
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setuserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 8,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setuserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
    <Header/>
    <UserInput userInput={userInput} onchange={handleChange}/>
    <Reuslt input={userInput}/>
    </>
  )
}
export default App
