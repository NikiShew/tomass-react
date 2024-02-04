import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import MainScreen from './components/pages/main-Screen/main-screen'
import StartPage from './components/pages/start/Start-page'
import TestTyping from './components/pages/test-typing/testTyping'
function App() {
	return (
		<>
			<main className='app-screen'>
				<header>
					<ul>
						<li>
							<Link to='/'>home</Link>
						</li>
						<li>
							<Link to='/test-typing'>test-typing</Link>
						</li>
						<li>
							<Link to='/main'>Main</Link>
						</li>
					</ul>
				</header>
			</main>

			<Routes>
				<Route path='/' element={<StartPage />} />
				<Route path='/test-typing' element={<TestTyping />} />
				<Route path='/main' element={<MainScreen />} />
			</Routes>
		</>
	)
}

export default App
