let container;

export default function getPopupContainer() {
	if (container) {
		return container;
	}

	container = document.querySelector('#popup_root');

	if (!container) {
		container = document.createElement('div');
		container.id = 'popup_root';
		document.body.appendChild(container);
	}

	return container;
}