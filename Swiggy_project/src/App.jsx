import { Route, Routes } from "react-router-dom"
import NavBar from "./components/Navbar/NavBar"
import Home from "./components/Home/Home"
import Help from "./components/Help/Help"

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>


      <div>
        <Routes>
          <Route path="/" element=<Home /> />

          <Route path="/help" element=<Help /> />
        </Routes>
      </div>
    </div>
  )
}

export default App
