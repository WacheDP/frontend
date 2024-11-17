import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'core-js'
import { Application } from './App'
import store from './store'

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Application />
  </Provider>
)