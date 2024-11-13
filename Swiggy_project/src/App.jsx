import { Route, Routes } from "react-router-dom"
import NavBar from "./components/Navbar/NavBar"
import Home from "./components/Home/Home"
import Help from "./components/Help/Help"
import SearchPage from "./components/Search/SearchPage"
import Details from "./components/Search/Details"
import { SearchData } from "./Data/searchdata"

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>


      <div>
        <Routes>
          <Route path="/" element=<Home /> />

          <Route path="/search" element=<SearchPage /> />

          <Route path="/help" element=<Help /> />

          <Route path="/details/:category" element={<Details />} />

        </Routes>
      </div>
    </div>
  )
}

export default App
