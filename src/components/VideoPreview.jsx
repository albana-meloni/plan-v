import { useState } from 'react';
import './videoPreview.css';

function VideoPreview() {
	return (
		<div className='video-preview'>
			<div>
				<img
					src='https://placehold.co/600x600'
					className='video-preview--thumbnail'
					alt='Thumbnail'
				/>
			</div>
			<div>
				<div className='video-preview--top'>
					<p className='video-preview--module'>Módulo 1</p>
					<p className='video-preview--name'>
						Conceptos clave de planificación y productividad
					</p>
				</div>
				<div className='video-preview--bottom'>
					<span className='progress-bar' value='27'></span>
					<a href='/' className='video-preview--link'>
						Ver
					</a>
				</div>
			</div>
		</div>
	);
}

export default VideoPreview;
