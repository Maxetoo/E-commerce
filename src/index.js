import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ProductsContext } from './Contexts/Products'
import { AppFilterContext } from './Contexts/Filters'
import { AppCartContext } from './Contexts/Usercart'
import './Styling/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain='dev-zqubepaq.us.auth0.com'
        clientId='v1xypeUmTZXa8wJKCFvOJBXO2DL67pEe'
        redirectUri={window.location.origin}
      >
        <ProductsContext>
          <AppFilterContext>
            <AppCartContext>
              <App />
            </AppCartContext>
          </AppFilterContext>
        </ProductsContext>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
)
