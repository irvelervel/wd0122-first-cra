import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
// we're selecting the empty div present in the index.html file
// and we're creating a "root" out of it!
root.render(<App />)
// <App /> is a React Component, the first and the only one we're mounting here
