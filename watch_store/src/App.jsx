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
import { homeCards } from "./data"
import BlackJet from "./components/Home/CardDetails/BlackJet"
import Gents from "./components/Home/CardDetails/Gents"
import XtimeSport from "./components/Home/CardDetails/XtimeSport"
import Apollo from "./components/Home/CardDetails/Apollo"

function App() {


  const getComponent = (title) => {
    switch (title) {
      case "BLACK JET":
        return <BlackJet />
      case "Gents":
        return <Gents />
      case "Xtime Sport":
        return <XtimeSport />
      case "Apollo":
        return <Apollo />
      default : 
      return null;
    }
  }

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

          <Route path="/signup" element={<SignUp />} />

          {homeCards.map((card) => (
            <Route key={card.title} path={card.path} element={getComponent(card.title)} />
          ))}

        </Routes>

      </div>
    </>
  )
}

export default App
