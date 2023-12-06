import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Cont from './components/Cont'
import About from './components/About';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='nav'>
        <Link to="/Home"> <p className='nav-b'> Kalvium ❤️ </p>  </Link>
        <div className='sub-nav'>
          <Link to="/Cont"><p className='nav-b '> Contact </p></Link>
          <Link to="/About"> <p className='nav-b'> About </p> </Link>
        </div>
      </div>
      <div className='content' >
        <Routes>
          <Route path="/Cont" element={<Cont />} />
          <Route path="/About" element={<About />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
