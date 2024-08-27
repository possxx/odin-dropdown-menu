class Dropdown {
	constructor(DOMElements) {
		this.dropdownElement = DOMElements.dropdown;
		this.openElement = DOMElements.open;
		this.initializeDropdown();
		this.toggleDropdown();
	}

	checkElements() {
		if (this.dropdownElement && this.openElement) {
			return true;
		}
		return false;
	}

	setOpenElementStyles(clientX, clientY) {
		this.openElement.style.position = 'absolute';
		this.openElement.style.top = `${clientY}px`;
		this.openElement.style.left = `${clientX}px`;
	}

	toggleOpenElement() {
		if (this.openElement.classList.contains('visible')) {
			this.openElement.classList.remove('visible');
			this.openElement.style.display = 'none';
		} else if (this.openElement.classList.contains('visible') === false) {
			this.openElement.classList.add('visible');
			this.openElement.style.display = 'block';
		}
	}

	closeOpenElement() {
		this.openElement.classList.remove('visible');
		this.openElement.style.display = 'none';
	}

	toggleDropdown() {
		this.dropdownElement.addEventListener('click', (e) => {
			this.toggleOpenElement();
			this.setOpenElementStyles(e.clientX, e.clientY);
		});
		window.addEventListener('click', (e) => {
			if (
				e.target !== this.dropdownElement &&
				this.openElement.classList.contains('visible')
			) {
				this.closeOpenElement();
			}
		});
	}

	initializeDropdown() {
		this.openElement.style.display = 'none';
	}
}

const dropdownElement = document.querySelector('.dropdown-button');
const openElement = document.querySelector('.dropdown-menu');

const dropdown = new Dropdown({ dropdown: dropdownElement, open: openElement });
