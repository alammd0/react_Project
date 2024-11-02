import { Route, Routes } from "react-router-dom"
import Home from "./components/Page/Home"
import About from "./components/Page/About"
import Shop from "./components/Page/Shop"
import Faq from "./components/Page/Faq"
import Contact from "./components/Page/Contact"
import Login from "./components/Page/Login"
import Cart from "./components/Page/Cart"
import NavBar from "./components/NavBar"
import "./App.css"
import SignUp from "./components/Page/SignUp"

function App() {

  return (
    <>
      <div className="wrapper">

        <div>
          <NavBar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/signup" element = {<SignUp/>} /> 
        </Routes>

      </div>
    </>
  )
}

export default App
