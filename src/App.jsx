import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import award from '../public/award.png'
import changeLang from '../public/change-lang.png'
import doc from '../public/doc.png'
import home from '../public/home-button.png'
import keyboard from '../public/keyboard.png'
import teamsIcon from '../public/teamwork.png'
import telegram from '../public/telegram.png'
import user from '../public/user.png'
import './App.css'
import MainScreen from './components/pages/main-Screen/main-screen'
import SmallScreen from './components/pages/small-screen/small-screen'
import StartPage from './components/pages/start/Start-page'
import TestTyping from './components/pages/test-typing/testTyping'
import Layout from './components/sections/Layout/Layout'
function App() {
	const [width, setWidth] = React.useState(window.innerWidth)

	React.useEffect(() => {
		const handleResize = event => {
			setWidth(event.target.innerWidth)
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	if (width < 950) {
		return <SmallScreen />
	}
	return (
		<>
			<Layout>
				<header class='header'>
					<div className='header-nav'>
						<ul>
							<li>
								<button class='change-lang'>
									<img src={changeLang} alt='' />
								</button>
							</li>
							<li class='account-btn'>
								<Link>
									<img src={user}></img>
								</Link>
							</li>
							<li>
								<Link>
									<span class='toms'>100</span>
								</Link>
							</li>
						</ul>
					</div>
				</header>
				<div className='work'>
					<nav class='nav-app'>
						<ul>
							<li>
								<Link to='/'>
									<img src={home} alt='' />
									home
								</Link>
							</li>
							<li>
								<Link to='/test-typing'>
									<img src={keyboard} alt='' />
									Typing
								</Link>
							</li>
							<li>
								<Link>
									<img src={teamsIcon} alt='' />
									Friend
								</Link>
							</li>
							<li>
								<Link>
									<img src={award} alt='' />
									Achievements
								</Link>
							</li>
							<li>
								<Link>
									<img src={telegram} alt='' />
									Group
								</Link>
							</li>
							<li>
								<Link to='/test-typing'>
									<img src={doc} alt='' />
									Documentation
								</Link>
							</li>
						</ul>
					</nav>
					<div className='work-block'>
						<div className='container'>
							<div className='work-block-inner'>
								<Routes>
									<Route path='/' element={<StartPage />} />
									<Route path='/test-typing' element={<TestTyping />} />
									<Route path='/main' element={<MainScreen />} />
								</Routes>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default App
