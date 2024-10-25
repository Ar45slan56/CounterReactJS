import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  const addvalue = ()=>{
    if(count >= 0){
    setCount(count+1);
    }
    else{ alert("value not available to add in counter...")};
  }

  const removevalue = ()=>{
    if(count > 0){
    setCount(count-1);
    }
    else{ alert("value not available to removed from counter...")};
  }

  const resetvalue = ()=>{
    if(count > 0){
    setCount(0);
    }
    else{ alert("value not available to reset from counter...")};
  }


  return (


    <>
     
      <h1>Counter By Arslan</h1>
      <h3>Counter value is: {count}</h3>
      <div className="card">
       <button onClick={addvalue}>Add Value</button> &nbsp;
       <button onClick={removevalue}>Remove Value</button> &nbsp;
       <button onClick={resetvalue}>Reset Value</button>
      </div>


      
    </>
  )
}

export default App
