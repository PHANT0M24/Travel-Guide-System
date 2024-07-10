<<<<<<< HEAD
import { Outlet } from "react-router-dom";
// import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Navbar2 from "./Components/Navbar/Navbar2";
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
>>>>>>> c7b4f90ea9eb2cf4ddbe2c020011b7664dbd70fb

  return (
    <>
<<<<<<< HEAD
      <Navbar2/>
      <Outlet/>
      <Footer/>
=======
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
>>>>>>> c7b4f90ea9eb2cf4ddbe2c020011b7664dbd70fb
    </>
  )
}

export default App
