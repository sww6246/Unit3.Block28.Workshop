import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Red from './Red.jsx'
import Blue from './Blue.jsx'
import Home from './Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blue" element={<Blue/>} />
          <Route path="/red" element={<Red/>} />
        </Routes>
      </div>
      <div id="footer">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
    </div>
    </>
  )
}

export default App
