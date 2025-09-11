import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");

  return (
    <>
    <div>
      <h1>{light}</h1>
      <button onClick={() => {
        setLight(light === "ON" ? "OFF" : "ON");
      }}>
        {light === 'ON' ? 'OFF' : 'ON'}
      </button>
    </div>
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
    </>
  )
}

export default App
  