
import React,{useContext} from "react";
import './../styles/App.css';
import {Authcontxt} from "../authenticationContex";

const App = () => {
  const {atention, setAttention} = useContext(Authcontxt);
  return (
    <div>
     <h1>Click on the checkbox to get authentictiod</h1>
     <p className="authText">{atention?"You are now authenticated, you can proceed":"you are not authenticated"}</p>
      <input type="checkbox" id="check" onClick={() => setAttention(!atention)} />
      <label htmlFor="check">I'm not robot</label>
    </div>
  )
}

export default App;
