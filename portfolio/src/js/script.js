// Free Code Camp Testing Script
const projectName = 'portfolio';
localStorage.setItem('example_project', 'Tribute Page')


// Navigation
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});