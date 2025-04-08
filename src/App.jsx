import { useState } from 'react';
import VideoPreview from './components/VideoPreview';
import './App.css';

function App() {
	const [lastTime, setLastTime] = useState(false);

	function handleInfoTitle() {
		return lastTime == false ? 'Comenzá por acá...' : 'Desde donde te quedaste...';
	}
	return (
		<main>
			<h1 className='main-title'>Plan V</h1>
			<p>No venís a improvisar. Venís a planificar tu versión real.</p>
			<h2>{handleInfoTitle()}</h2>
			<VideoPreview></VideoPreview>
		</main>
	);
}

export default App;
