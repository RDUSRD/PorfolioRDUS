
// Cambiar el color del backgroud de la barra de navegacion

const scrollHeader = () => {
    const header = document.getElementById('header');
    // Cuando la vista supere 50 vh, entonces se cambia el color del background de la barra de nav.
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header');
};


window.addEventListener('scroll', scrollHeader);

// -------------------------------------------------------

// Services Modal 

const modalViews = document.querySelectorAll('.services__modal');

const modalBtns = document.querySelectorAll('.services__button');

const modalClose = document.querySelectorAll('.services__modal-close');


modalBtns.forEach((mb, i) => {

    mb.addEventListener('click', () => {
        modalViews[i].classList.add('active-modal');
    });

    modalClose.forEach( mc => {
        mc.addEventListener('click', () => {
            modalViews[i].classList.remove('active-modal');
        });
    });    
});


// ----------------------------------------------

// Mixitup Filter Portfolio

let mixerPortafolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});


/* Link active work */ 

const linkWork = document.querySelectorAll('.work__item');

function activeWork(i) {
    linkWork.forEach(link => {
        link.classList.remove('active-work');
    });
    this.classList.add('active-work');
};

linkWork.forEach((link) => {
    link.addEventListener('click', activeWork);
});

// ------------------------------------------------------
// Swiper Testimonial

let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    grabCursor:true,
    loop: 'true',

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
    },
    
});

// --------------------------------------------------------------------

// Cambiar el color del link del nav correspondiente a la seccion que ve el usario 

const sections = document.querySelectorAll('section[id]');
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset;

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link');
		}else{
			sectionsClass.classList.remove('active-link');
		}                                                    
	});
};

window.addEventListener('scroll', scrollActive);

//---------------------------------------------------------------

// Cambiar tema oscuro / claro 

// Tema claro

const themeButton = document.getElementById('theme-button');
const lightTheme = 'light-theme';
const iconTheme = 'ri-sun-line';

// Previamente se selecciona el tipo 
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Obtenemos el tema actual
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// Validamos si el usario ha usado un tema previamente
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
};

// Activamos y desactivamos el tema, presionando el boton

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(lightTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});



// ------------------------------------------------------

// Animacion Scroll Reveal

const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay: 400,

});

sr.reveal(`.home__data`);
sr.reveal(`.home__social, .home__scroll`, {delay:900, origin: 'bottom'});
sr.reveal(`.about__img, .about__data, .skills__content, .services__card, .work__card `);