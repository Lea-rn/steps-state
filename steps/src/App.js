
import "./style.css"

const messages = [
  "Learn React " , 
  "Apply for jobs 🏢" , 
  "Invest your new income 💸"
]

function App() {
  const step = 2 ; 
  return (
    <div className="App">
   <div className="num-steps-container">
    <p className={`step ${step>=1 ? "active" :""}`}>1</p>
    <p className={`step ${step>=2 ? "active" :""}`}>2</p>
    <p className={`step ${step>=3 ? "active" :""}`}>3</p>
   </div>
   <p className="step-info">step {step} : {messages[step-1]}</p>
<div className="btn-container">
<button>Previous</button>
<button>Next</button>
</div>

    </div>
  );
}

export default App;
