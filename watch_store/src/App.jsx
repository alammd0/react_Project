import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import About from "./components/Page/About/About"
import Shop from "./components/Page/Shop/Shop"
import Faq from "./components/Page/Faq"
import Contact from "./components/Page/Contact/Contact"
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
import { ShoppingCart } from "./data"
import Card1 from "./components/Page/Shop/CardDetails/Card1"
import Card2 from "./components/Page/Shop/CardDetails/Card2"
import Card3 from "./components/Page/Shop/CardDetails/Card3"
import Card4 from "./components/Page/Shop/CardDetails/Card4"
import Card5 from "./components/Page/Shop/CardDetails/Card5"
import Card6 from "./components/Page/Shop/CardDetails/Card6"
import Card7 from "./components/Page/Shop/CardDetails/Card7"
import Card8 from "./components/Page/Shop/CardDetails/Card8"
import Card9 from "./components/Page/Shop/CardDetails/Card9"
import { UpdateProvider } from "./components/ContextApi/UpdateCartproduction"

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
      default:
        return null;
    }
  }


  const getCardDetail = (title) => {
    switch (title) {
      case "Rolex Analog":
        return <Card1 />
      case "Marathon Watch":
        return <Card2 />
      case "Tissot Watch":
        return <Card3 />
      case "Wristwatchs":
        return <Card4 />
      case "Round Analog":
        return <Card5 />
      case "Chronograph Watch":
        return <Card6 />
      case "Wristwatch":
        return <Card7 />
      case "Chronograph Wristwatch":
        return <Card8 />
      case "Luxurious Dark":
        return <Card9 />

      default:
        return null;

    }
  }

  return (
    <>
      {/* <UpdateProvider> */}

        <div className="wrapper">

          <div>
            <NavBar />
          </div>

          <Routes>
            <Route path="/" element={<Home
            />} />
            <Route path="/shop" element={<Shop

            />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<SignUp />} />

            {homeCards.map((card) => (
              <Route key={card.title} path={card.path} element={getComponent(card.title)} />
            ))}


            {
              ShoppingCart.map((Shopcard) => (
                <Route key={Shopcard.title} path={Shopcard.path} element={getCardDetail(Shopcard.title)} />
              ))
            }

          </Routes>

        </div>
      {/* </UpdateProvider> */}

    </>
  )
}

export default App
