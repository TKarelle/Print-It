const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.getElementById('arrow_left');
const arrowRight = document.getElementById('arrow_right');
const banner = document.querySelector('.banner-img'); 
const tagline = document.querySelector('.banner-p');
let currentIndex = 0;

arrowLeft.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1; 
    }
    updateBanner();
});

arrowRight.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0; 
    }
    updateBanner();
});

const dotsContainer = document.querySelector('.dots');
slides.forEach ((slides,index) => {
	const dot = document.createElement('span')
    dot.classList.add('dot')
	dot.setAttribute('data-index', index); 
    dotsContainer.appendChild(dot); 
});

function updateDots(){
	const dots = document.querySelectorAll('.dot');
	dots.forEach (dot => dot.classList.remove('dot_selected'));
	dots[currentIndex].classList.add('dot_selected');
}

function updateBanner() {
    banner.src = slides[currentIndex].image;
	tagline.innerHTML = slides[currentIndex].tagLine;
	updateDots();
}

updateBanner();