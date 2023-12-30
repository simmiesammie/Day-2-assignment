import React, {useState} from "react";
const ButtonClicked=()=>{
    const[count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        count < 2? setCount(0):setCount(count -2);
    };
    return(
        <div>
             <p>Count={count} </p>
             <button onClick={increment}>Click me to increment</button>
             <button onClick={decrement}>Click me to decrement</button>
        </div>
    )
}
export default ButtonClicked;