import './App.scss';
import Navbar from './sections/navbar/Navbar';
import Hero from './sections/hero/Hero';
import News from './sections/news/News';
import Features from './sections/features/Features';

function App() {
	return (
		<div>
			<section className="app-section">App works!</section>
			<Navbar />
			<Hero />
			<News />
			<Features />
		</div>
	);
}

export default App;
