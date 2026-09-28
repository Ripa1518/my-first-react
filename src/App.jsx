import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'

function App() {
  function handleClick(){
    alert('button clicked');
  }
function addFive(num){
  alert(num+5);
}

  return (
    <>       
        <div>
          <h1>Get started</h1>
          <Users></Users>
          <Team></Team>
          <Counter></Counter>
          <h3>React Core Concepts</h3>
          <button onClick={handleClick}>Click me</button>
          <button onClick={() =>addFive(5)}>five</button>
          
        </div>
    </>
  )
}

export default App
