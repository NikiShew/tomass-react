import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import FirstScreen from './components/pages/first-screen/First-screen.jsx'
import { ResultProvider } from './components/pages/test-typing/ResultContext.jsx'
import './index.css'
let exit = localStorage.getItem('exit')
ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<ResultProvider>{exit ? <App /> : <FirstScreen />}</ResultProvider>
	</BrowserRouter>
)
