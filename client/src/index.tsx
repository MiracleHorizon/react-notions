import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import { store } from 'store'
import { AuthContext, fbAuth, fbDb } from 'context/Auth'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Router>
    <Provider store={store}>
      <AuthContext.Provider value={{ fbAuth, fbDb }}>
        <App />
      </AuthContext.Provider>
    </Provider>
  </Router>
)
