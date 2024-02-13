import StartPage from '../start/Start-page'
import './first-screen.scss'
function FirstScreen() {
	function exit() {
		localStorage.setItem('exit', true)
	}

	return (
		<>
			{/* Routes */}
			{/* <h1>First screen</h1>
			<a href={<App></App>} onClick={exit}>
				Exit
			</a> */}
			<main className='main'>
				{/* <<img className="bg" src="./public/bg.png" alt="" /> --> */}
				<div className='color red'></div>
				<div className='color blue'></div>
				<div className='container'>
					<div className='main-inner'>
						<h1 className='main-title'>Light up the keys.</h1>
						<h2 className='main-subtitle'>
							Give free rein to your typing <br />
							and amaze the world with your mastery!
						</h2>
						<a className='toGo' onClick={exit} href={<StartPage />}>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							Get Start
						</a>
					</div>
				</div>
				<section>
					<div className='info'>
						<div className='container'>
							<div className='info-inner'>
								<div className='block1 block'>
									<h2>New Records!</h2>
									<h3>
										Beat Your Records: Check Out Your Latest Best Performances!
										Discover Your Words Per Minute.
									</h3>
								</div>
								<div className='block2 block'>
									<h2>Test Time Adjustment</h2>
									<h3>
										You can adjust the test duration to your preference (30
										seconds, 1 minute, 1 minute 30 seconds).
									</h3>
								</div>
								<div className='block3 block'>
									<h2>Explore New Modes and More</h2>
									<h3>
										We've added a lot of new features that weren't in the
										previous version of "Thomass".
									</h3>
								</div>
							</div>
							<div className='btn-news'>
								<a className='toGo'>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									More
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default FirstScreen
