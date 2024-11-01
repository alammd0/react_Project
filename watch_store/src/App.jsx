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

  const images = [
    'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1451859757691-f318d641ab4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHdhdGNofGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1525342306245-c6a1e32087ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1554151447-b9d2197448f9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ]

  return (
    <>
      <div className="wrapper">

        <div>
          <NavBar />
        </div>

        <Routes>
          <Route path="/" element={<Home images = {images} />} />
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
