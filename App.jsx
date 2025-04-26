import React from 'react'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './components/store'

export default function App() {
  return (
    <div>
      <Provider store={store}>
      <Navbar />
      </Provider>
    </div>
  )
}
