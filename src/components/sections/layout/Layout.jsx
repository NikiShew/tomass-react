import './Layout.scss'
function Layout({ children }) {
	return (
		<>
			<main className='main'>
				<div className='color red'></div>
				<div className='color blue'></div>

				{children}
			</main>
		</>
	)
}

export default Layout
