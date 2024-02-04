import App from '../../../App'
import MainScreen from '../main-Screen/main-screen'

import './first-screen.scss'
function FirstScreen() {
	function exit() {
		localStorage.setItem('exit', true)
		return <MainScreen></MainScreen>
	}

	return (
		<>
			{/* Routes */}
			{/* <h1>First screen</h1>
			<a href={<App></App>} onClick={exit}>
				Exit
			</a> */}
			<main class='main'>
				{/* <<img class="bg" src="./public/bg.png" alt="" /> --> */}
				<div class='color red'></div>
				<div class='color blue'></div>
				<div class='container'>
					<div class='main-inner'>
						<h1 class='main-title'>Light up the keys.</h1>
						<h2 class='main-subtitle'>
							Give free rein to your typing <br />
							and amaze the world with your mastery!
						</h2>
						<a class='toGo' href={<App></App>} onClick={exit}>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							Get Start
						</a>
					</div>
				</div>
				<section>
					<div class='info'>
						<div class='container'>
							<div class='info-inner'>
								<div class='block1 block'>
									<h2>New Records!</h2>
									<h3>
										Beat Your Records: Check Out Your Latest Best Performances!
										Discover Your Words Per Minute.
									</h3>
								</div>
								<div class='block2 block'>
									<h2>Test Time Adjustment</h2>
									<h3>
										You can adjust the test duration to your preference (30
										seconds, 1 minute, 1 minute 30 seconds).
									</h3>
								</div>
								<div class='block3 block'>
									<h2>Explore New Modes and More</h2>
									<h3>
										We've added a lot of new features that weren't in the
										previous version of "Thomass".
									</h3>
								</div>
							</div>
							<div class='btn-news'>
								<a class='toGo' href='#'>
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
