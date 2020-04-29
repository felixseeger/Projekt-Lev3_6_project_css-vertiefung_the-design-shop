// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');
// const links = document.querySelector('.nav-links li');

// hamburger.EventListender(click, () => {
// 	navLinks.classList.toggle('open');
// 	links.forEach(link =>){
// 		link.classList.toggle("fade");
// 	}
// });

const drawer = document.getElementById('drawer');

const overlay = document.getElementById('overlay');

function openDrawer() {
	drawer.style.left = '0px';
	overlay.style.display = 'block';
}

function closeDrawer() {
	drawer.style.left = '-160px';
	overlay.style.display = 'none';
}
