import { useState } from 'react';
import './videoPreview.css';

function VideoPreview({ thumbnail, module, title, progress, link }) {
	return (
		<div className='video-preview'>
			<div>
				<img src={thumbnail} className='video-preview--thumbnail' />
			</div>
			<div>
				<div className='video-preview--top'>
					<p className='video-preview--module'>Módulo {module}</p>
					<p className='video-preview--name'>{title}</p>
				</div>
				<div className='video-preview--bottom'>
					<span className='progress-bar' value={progress}></span>
					<a href={link} className='video-preview--link'>
						Ver
					</a>
				</div>
			</div>
		</div>
	);
}

export default VideoPreview;
