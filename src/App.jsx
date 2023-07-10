import Hero from './componets/Hero/Hero'
import Reviews from './componets/Reviews/Reviews'
import Layout from './componets/layout/Layout'

const App = () => {
	return (
		<>
			<Layout>
				<div className="main">
					<Hero />
					<Reviews />
				</div>
			</Layout>
		</>
	)
}

export default App
