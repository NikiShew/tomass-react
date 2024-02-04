import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import FirstScreen from './components/pages/first-screen/First-screen.jsx'
import './index.css'
let exit = localStorage.getItem('exit')
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>{exit ? <App /> : <FirstScreen />}</BrowserRouter>
	</React.StrictMode>
)
