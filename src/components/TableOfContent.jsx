import { useState } from 'react';
import SingleContent from './SingleContent';

function TableOfContent({ moduleNumber, moduleName, progress, listContent, link }) {
	return (
		<div style={{display: 'flex', flexDirection: 'column', gap: 'var(--1)'}}>
			<a href={link}>
				Módulo {moduleNumber}: {moduleName}
			</a>
			<span className='progress-bar' value={progress} style={{ display: 'block' }}></span>
			<div>
				{listContent.map((content, index) => (
					<SingleContent
						key={index}
						type={content.type}
						name={content.title}
						status={content.status}
						link='/'
					/>
				))}
			</div>
		</div>
	);
}

export default TableOfContent;
