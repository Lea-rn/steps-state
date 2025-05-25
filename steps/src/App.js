import { useState } from "react";
import "./style.css";

const messages = [
  "Learn React ",
  "Apply for jobs 🏢",
  "Invest your new income 💸",
];

function App() {
  let [step, setStep] = useState(1);
  const [isOpen, setIsopen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((current) => current - 1);
    }
  }

  function handleNext() {
    if (step < 3) setStep((cur) => cur + 1);
  }

  return (
    <>
      <div onClick={() => setIsopen((cur) => !cur)} className="close-btn">
        ✖️
      </div>
      {isOpen && (
        <div className="App">
          <div className="num-steps-container">
            <p className={`step ${step >= 1 ? "active" : ""}`}>1</p>
            <p className={`step ${step >= 2 ? "active" : ""}`}>2</p>
            <p className={`step ${step >= 3 ? "active" : ""}`}>3</p>
          </div>
          {/* ////////// */}
       
  <StepMessage step={step}>    {messages[step - 1]}        </StepMessage>

       

          <div className="btn-container">
            {/* <Button
      bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}
      text = "previous" emoji = "👈"
      /> */}

            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              👈 Previous
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next 👉
            </Button>

            {/* <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button> */}
          </div>


     

     

  
        
        </div>
      )}
    </>
  );
}

export default App;

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}



const StepMessage = function ({step , children}){
  return            <p className="step-info">
         Step {step} : {children}
       </p>
}