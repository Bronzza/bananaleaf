// Header scroll behavior
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu functionality
const burger = document.querySelector('.header__burger');
const body = document.body;

burger.addEventListener('click', () => {
    body.classList.toggle('menu-open');
    body.style.overflow = body.classList.contains('menu-open') ? 'hidden' : '';
});

// Close mobile menu when clicking on links
document.querySelectorAll('.header__link').forEach(link => {
    link.addEventListener('click', () => {
        body.classList.remove('menu-open');
        body.style.overflow = '';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (body.classList.contains('menu-open') && 
        !e.target.closest('.header__nav') && 
        !e.target.closest('.header__burger')) {
        body.classList.remove('menu-open');
        body.style.overflow = '';
    }
});

// Close mobile menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && body.classList.contains('menu-open')) {
        body.classList.remove('menu-open');
        body.style.overflow = '';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Hero slider initialization
$('.hero__slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    pauseOnFocus: false
});

// Story gallery slider initialization
$('.story__slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: '<button class="slick-prev" type="button"></button>',
    nextArrow: '<button class="slick-next" type="button"></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

// Benefits hover functionality
const benefitItems = document.querySelectorAll('.benefits__item');
const benefitImage = document.querySelector('.benefits__image');
const benefitDescription = document.querySelector('.benefits__description');

// Sample data for benefits
const benefitsData = {
    'Nurturing Environment': {
        image: 'images/benefits/800_600_0.jpg',
        description: 'At Banana Leaf Childcare, children thrive in a secure and joyful space designed to support all aspects of development. Through sensory play, outdoor activities, and a nurturing atmosphere, we help young minds grow confidently—emotionally, physically, and intellectually—from ages 1.5 to 5 years old.'
    },
    'Quality Education': {
        image: 'images/benefits/800_600_1.jpg',
        description: 'Our early learning program is crafted to spark curiosity and creativity in every child. With hands-on sensory exploration, playful learning, and age-appropriate educational activities, we guide children from their earliest steps into a love of learning that lasts a lifetime.'
    },
    'Experienced Staff': {
        image: 'images/benefits/800_600_3.jpg',
        description: 'Our team of qualified and attentive educators is dedicated to each child’s unique journey. Combining professional experience with heartfelt care, we create a warm, structured environment enriched with sensory play and individual attention to support healthy growth and joyful discovery.'
    }
};

benefitItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Remove active class from all items
        benefitItems.forEach(i => i.classList.remove('benefits__item--active'));
        
        // Add active class to current item
        item.classList.add('benefits__item--active');
        
        // Get the benefit title
        const title = item.querySelector('.benefits__item-title').textContent;
        
        // Update image and description
        if (benefitsData[title]) {
            benefitImage.src = benefitsData[title].image;
            benefitDescription.textContent = benefitsData[title].description;
        }
    });
});

// Modal functionality
const modalTriggers = document.querySelectorAll('[data-modal]');
const modals = document.querySelectorAll('.modal');
const modalCloses = document.querySelectorAll('.modal__close');

modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const modalId = trigger.getAttribute('data-modal');
        const modal = document.getElementById(`${modalId}-modal`);
        
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

modalCloses.forEach(close => {
    close.addEventListener('click', () => {
        const modal = close.closest('.modal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close modal when clicking outside
modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modals.forEach(modal => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
});

// Calendar functionality
const calendarTabs = document.querySelectorAll('.calendar-tab');
const calendarViews = document.querySelectorAll('.calendar-view');
const halfYearSlides = document.querySelectorAll('.quarter-slide');
const halfYearTitle = document.querySelector('.quarter-title');
const prevHalf = document.querySelector('.quarter-nav.prev');
const nextHalf = document.querySelector('.quarter-nav.next');

let currentHalf = 1;

// Tab switching
calendarTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        calendarTabs.forEach(t => t.classList.remove('active'));
        calendarViews.forEach(v => v.classList.remove('active'));
        
        tab.classList.add('active');
        const viewId = `${tab.dataset.calendar}-view`;
        document.getElementById(viewId).classList.add('active');
    });
});

// Half-year navigation
function updateHalfYearView() {
    halfYearSlides.forEach(slide => {
        slide.classList.remove('active');
        if (parseInt(slide.dataset.half) === currentHalf) {
            slide.classList.add('active');
        }
    });

    halfYearTitle.textContent = `Term ${currentHalf} 2025`;
    
    // Update navigation buttons
    prevHalf.classList.toggle('disabled', currentHalf === 1);
    nextHalf.classList.toggle('disabled', currentHalf === 2);
}

prevHalf.addEventListener('click', () => {
    if (currentHalf > 1) {
        currentHalf--;
        updateHalfYearView();
    }
});

nextHalf.addEventListener('click', () => {
    if (currentHalf < 2) {
        currentHalf++;
        updateHalfYearView();
    }
});

// Initialize half-year view
updateHalfYearView(); 