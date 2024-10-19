

// Component
import { useState } from "react";

function FunctionCompontentsTutorials (props) {

    // State
const [count,setCount]= useState (0);

// cdm

// event 1
const countPlusHandleClick=()=>{
    setCount(count+1);
} // end event

// event 2
const countMinusHandleClick=()=>{
    setCount(count-1);
} // end event


    return(
        <div>
            <h1> Sayım </h1>
            <p> Say: {count} </p>
            <button className="btn btn-primary" onClick={countPlusHandleClick}>+</button>
            <button className="btn btn-danger ms-2" onClick={countMinusHandleClick}>-</button>

        </div>
    );
}

//end FunctionCompontentsTutorials

export default FunctionCompontentsTutorials;