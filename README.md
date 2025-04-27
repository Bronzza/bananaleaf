# Banana Leaf International Private Child Care Website

A responsive website for Banana Leaf International Private Child Care, built with HTML, SCSS, and vanilla JavaScript.

## Features

- Fully responsive design for all screen sizes
- Mobile-first approach
- Smooth animations and transitions
- Interactive elements (sliders, modals, hover effects)
- Clean and modern UI with tropical theme
- BEM methodology for CSS organization
- SCSS preprocessing with Prepros

## Project Structure

```
banana_leaf/
├── css/
│   └── main.css
├── js/
│   └── main.js
├── scss/
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── base/
│   │   ├── _reset.scss
│   │   └── _typography.scss
│   └── components/
│       ├── _header.scss
│       ├── _hero.scss
│       ├── _benefits.scss
│       ├── _story.scss
│       ├── _admission.scss
│       ├── _footer.scss
│       └── _modal.scss
├── images/
│   ├── hero-1.jpg
│   ├── hero-2.jpg
│   ├── benefit-main.jpg
│   ├── benefit-nurturing.jpg
│   ├── benefit-education.jpg
│   ├── benefit-staff.jpg
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   └── gallery-3.jpg
├── index.html
└── README.md
```

## Setup Instructions

1. Install Prepros for SCSS preprocessing
2. Clone the repository
3. Open the project in Prepros
4. Start the local server through Prepros

## Dependencies

- jQuery (for Slick Slider)
- Slick Slider (for carousels)
- Font Awesome (for icons)
- Google Fonts (Poppins and Nunito)

## SCSS Structure

- `_variables.scss`: Contains all SCSS variables (colors, breakpoints, etc.)
- `_mixins.scss`: Contains reusable mixins and functions
- `base/`: Contains reset and typography styles
- `components/`: Contains styles for individual components

## JavaScript Features

- Header scroll behavior (transparent to solid)
- Mobile menu toggle
- Smooth scroll for anchor links
- Hero slider with Slick
- Story gallery slider with Slick
- Benefits hover functionality
- Modal windows for prices and calendar

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- Font Awesome for icons
- Google Fonts for typography
- Slick Slider for carousels

## License

This project is licensed under the MIT License. 