import { Route, Routes, useSearchParams } from "react-router-dom"
import NavBar from "./components/Navbar/NavBar"
import Home from "./components/Home/Home"
import Help from "./components/Help/Help"
import SearchPage from "./components/Search/SearchPage"
import "./App.css"
import CardNavbar from "./components/Navbar/CardNavbar"
import Cart from "./components/Cart/Cart"
import { useState } from "react"


function App() {


  const [isOpenNavbar, setisOpenNavbar] = useState(false);
  const [cartItem, SetCartItem] = useState([]);


  function addCartItem(item) {
    SetCartItem((prevItem) => [...prevItem, item]);
  }

  function removeCartItem(itemId) {
    SetCartItem((prevItem) => prevItem.filter((item) => item.id !== itemId))
  }

  function clear() {
    SetCartItem([]);
  }

  console.log(cartItem);

  function openNavbar() {
    setisOpenNavbar(true);
  }

  function openMainNavbar() {
    setisOpenNavbar(false);
  }



  return (
    <div className="main_conent_all">
      <div>
        {
          isOpenNavbar ? (<CardNavbar />) : (<NavBar openNavbar={openNavbar} />)
        }
      </div>


      <div>
        <Routes>
          <Route path="/" element=<Home /> />

          <Route path="/search" element=<SearchPage addCartItem={addCartItem} /> />

          <Route path="/help" element=<Help /> />

          <Route path="/cart" element=<Cart openMainNavbar={openMainNavbar} cartItem={cartItem} removeCartItem ={removeCartItem} clear={clear} /> />
        </Routes>
      </div>
    </div>
  )
}

export default App
