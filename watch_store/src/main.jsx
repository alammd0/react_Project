import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UpdateProvider } from './components/ContextApi/UpdateCartproduction.jsx'

createRoot(document.getElementById('root')).render(

  <UpdateProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UpdateProvider>

)
