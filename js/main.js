// Header scroll behavior
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 0) {
        header.classList.remove('header--transparent');
        header.classList.add('header--solid');
    } else {
        header.classList.remove('header--solid');
        header.classList.add('header--transparent');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const mobileToggle = document.querySelector('.header__mobile-toggle');
const mobileMenu = document.querySelector('.header__mobile-menu');
const mobileClose = document.querySelector('.header__mobile-close');

mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.add('header__mobile-menu--active');
});

mobileClose.addEventListener('click', () => {
    mobileMenu.classList.remove('header__mobile-menu--active');
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
            
            // Close mobile menu if open
            mobileMenu.classList.remove('header__mobile-menu--active');
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
    autoplaySpeed: 5000,
    pauseOnHover: true
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
        image: 'images/benefit-nurturing.jpg',
        description: 'Our child care center provides a nurturing environment where children can learn, grow, and develop their full potential.'
    },
    'Quality Education': {
        image: 'images/benefit-education.jpg',
        description: 'We offer quality early learning programs designed to help children develop essential skills through play-based learning.'
    },
    'Experienced Staff': {
        image: 'images/benefit-staff.jpg',
        description: 'Our team of experienced and qualified professionals is dedicated to providing the best care and education for your child.'
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
            modal.classList.add('modal--active');
            document.body.style.overflow = 'hidden';
        }
    });
});

modalCloses.forEach(close => {
    close.addEventListener('click', () => {
        const modal = close.closest('.modal');
        modal.classList.remove('modal--active');
        document.body.style.overflow = '';
    });
});

// Close modal when clicking outside
modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('modal--active');
            document.body.style.overflow = '';
        }
    });
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modals.forEach(modal => {
            modal.classList.remove('modal--active');
            document.body.style.overflow = '';
        });
    }
}); 