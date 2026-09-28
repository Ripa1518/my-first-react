import { useState } from "react"

export default function Counter(){
    const [count , setCount] = useState(0);
    const handleAdd = () =>{
        const newC = count+1
        setCount(newC)
    }
    return (
        <div style={{border: '2px solid red'}}>
            <p>Counter : {count} </p>
            <button onClick={handleAdd}>click</button>
        </div>
    )
}