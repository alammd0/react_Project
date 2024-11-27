import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Work from './Components/Work/Work'
import Services from './Components/Services/services'
import Client from './Components/Client/Client'
import Insight from './Components/Insight/Insight'

function App() {
  
  return (
    <div className='mainContent'>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />}> </Route>
        <Route path='/service' element=<Services /> />
        <Route path='/client' element={<Client />} />
        <Route path='/insight' element={<Insight />} />

      </Routes>
    </div>

  )
}

export default App
