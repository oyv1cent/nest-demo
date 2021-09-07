import React, { useState } from 'react'
import logo from './logo.svg'
// import lo from './assets/guidance/owner_macbook.png'
import lo from './assets/guidance/owner_step2.png'
// import lo1 from './assets/guidance/step_1_bg.jpg'
// import lo2 from './assets/guidance/step_3_bg.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={lo} className="App-logo" alt="logo" />
        {/*<img src={lo1} className="App-logo" alt="logo" />*/}
        {/*<img src={lo2} className="App-logo" alt="logo" />*/}
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
