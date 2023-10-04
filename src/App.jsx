// import './App.css'
import NavBar from "./components/NavBar"
import Socials from "./components/Socials.jsx"
import Home from "./components/Home"

import SignUp from "./SignUp"
import LogIn from "./LogIn"
import News from "./components/News"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
      {/* <NavBar /> */}
        <Routes>
      
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          {/* <Route path="/"></Route> */}
        </Routes>
      {/* <Socials /> */}
      </Router>
    </>
  )
}

export default App
