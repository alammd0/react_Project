import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SwiggyFunctionProvider } from './components/Context/SwiggyContext.jsx'

createRoot(document.getElementById('root')).render(
  <SwiggyFunctionProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SwiggyFunctionProvider>
)
