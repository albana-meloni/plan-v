import { useState } from 'react';
import VideoPreview from './components/VideoPreview';
import TableOfContent from './components/TableOfContent';
import './App.css';

function App() {
	const [lastTime, setLastTime] = useState(false);

	function handleInfoTitle() {
		return lastTime == false ? 'Comenzá por acá...' : 'Desde donde te quedaste...';
	}
	return (
		<main>
			<div className='main-heading'>
				<h1 className='main-title'>Plan V</h1>
				<p className='main-subtitle'>
					No venís a improvisar. Venís a planificar tu versión real.
				</p>
			</div>
			<section>
				<article>
					<h2>{handleInfoTitle()}</h2>
					<div className='video-container'>
						<VideoPreview
							thumbnail='https://placehold.co/600x400'
							module='1'
							title='Conceptos clave de planificación y productividad'
							progress='27'
							link='/'
						/>
					</div>
				</article>
				<article>
					<h2>Lista de contenidos</h2>
					<div className='content-container'>
						<TableOfContent
							moduleNumber='1'
							moduleName='Introducción y conceptos clave'
							progress='35'
							link='/'
							listContent={[
								{
									title: 'Cómo aprovechar el curso',
									type: 'video',
									status: 'completed',
								},
								{
									title: 'Conceptos clave de planificación y productividad',
									type: 'video',
									status: 'progress',
								},
								{
									title: 'Introducción a la Planificación Personal',
									type: 'doc',
									status: 'default',
								},
								{
									title: 'Diagnóstico de Organización Personal',
									type: 'exercise',
									status: 'blocked',
								},
							]}
						/>
					</div>
				</article>
			</section>
		</main>
	);
}

export default App;
