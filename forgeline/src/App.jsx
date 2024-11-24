import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Work from './Components/Work/Work'

function App() {
  return (
    <div className='mainContent'>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />}> </Route>
      </Routes>
    </div>

  )
}

export default App
