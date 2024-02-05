import Layout from '../../sections/Layout/Layout'
import './small-screen.scss'
function SmallScreen() {
	return (
		<>
			{/* <h1 class='small-screen-title'>У вас маленький экран</h1> */}
			<Layout>
				<div className='small-screen-info'>
					<h1 className='small-screen-title'>
						Sorry, but this platform is only available for desktop devices.
					</h1>
				</div>
			</Layout>
		</>
	)
}
export default SmallScreen
