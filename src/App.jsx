// import { useState } from 'react'

import Navbar from "./Components/Navbar"
import Footer from "./Components/footer"
// import Home from "./home/home"
import "./index.css"
import Router from "./router"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Router/>
    <Footer/>  
    </>
  )
}

export default App
