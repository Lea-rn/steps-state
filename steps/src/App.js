import { useState } from "react";
import "./style.css";

const messages = [
  "Learn React ",
  "Apply for jobs 🏢",
  "Invest your new income 💸",
];

function App() {
  let [step , setStep] = useState (1)
  const [isOpen , setIsopen] = useState (true) ; 
  // const [test , setTest] = useState ({name : "nader"})

  // const step = 2;
 function handlePrevious (){
   if (step > 1) {
    /// bac practice :: 
    // setStep(step-1)  
    // setStep (step -1)
///// good practice ::: 
    setStep ((current)=> current - 1  )
    // setStep ((current)=> current - 1  )

   } 
 }

 function handleNext (){
 if (step < 3)  setStep((cur)=> cur + 1 )
  /// bad practice ::
  // test.name = "khouloud"
  /// good practice :: 
  // setTest ({name : "jalila"})
 }



  return (


 
<>
<div  onClick={()=> setIsopen( (cur)=> !cur) } className="close-btn">✖️</div>
  {isOpen &&  <div className="App">
         <div className="num-steps-container">
           <p className={`step ${step >= 1 ? "active" : ""}`}>1</p>
           <p className={`step ${step >= 2 ? "active" : ""}`}>2</p>
           <p className={`step ${step >= 3 ? "active" : ""}`}>3</p>
         </div>
         <p className="step-info">
           Step {step} : {messages[step - 1]}
         </p>
         {/* <p>{test.name}</p> */}
         <div className="btn-container">
           <button onClick={handlePrevious}>Previous</button>
           <button onClick={handleNext}>Next</button>
         </div>
   </div>}
</>

  ) }

  


export default App;
