const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const nav-links = document.querySelectorAll('nav-links li')
	///toggle nav

	burger.addEventListener('click', () => {
			/// animate links
		nav.classList.toggle('nav-active');
	
		navLinks.forEach((link, index) => {
		if(link.style.animation) {
			link.style.animation = '';
		} else {
		link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s'
		}
	});
	});
}

navSlide();