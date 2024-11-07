import { Route, Routes } from "react-router-dom"
import NavBar from "./components/Navbar/NavBar"
import Home from "./components/Home/Home"

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>


      <div>
        <Routes>
          <Route path="/" element=<Home /> />
        </Routes>
      </div>
    </div>
  )
}

export default App
