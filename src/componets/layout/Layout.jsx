import Footer from './Footer/Footer'
import Header from './Header/Header'

const Layout = ({ children }) => {
	return (
		<div className="app">
			<Header />
			{children}
			<Footer />
		</div>
	)
}

export default Layout
