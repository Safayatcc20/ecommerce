import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import ShopContextProvider from './Context/ShopContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider>
        <App/>
    </ShopContextProvider> 
  </StrictMode>,
)
