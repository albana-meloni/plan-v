import './singleContent.css';

function SingleContent({ type, name, status, link }) {
	function showContentIcon() {
		if (type == 'video') {
			return '🎬';
		} else if (type == 'doc') {
			return '📄';
		} else if (type == 'exercise') {
			return '✍🏻';
		} else {
			return '';
		}
	}

	function showContentStatus() {
		if (status == 'completed') {
			return '✅';
		} else if (status == 'progress') {
			return '▶️';
		} else if (status == 'blocked') {
			return '🔒';
		} else {
			return '';
		}
	}

	return (
		<p className='content-info'>
			{showContentIcon()} <a href={link}>{name}</a> {showContentStatus()}
		</p>
	);
}

export default SingleContent;
