const reveals = document.querySelectorAll('.reveal');
const hamburger = document.getElementById('hamburger');
const fullscreenMenu = document.getElementById('fullscreen-menu');
const closeMenu = document.getElementById('close-menu');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.style.display = 'none';
    fullscreenMenu.classList.add('active');
  });

closeMenu.addEventListener('click', () => {
    hamburger.style.display = 'flex';
    fullscreenMenu.classList.remove('active');
});

window.addEventListener('scroll', () => {
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
});

// Contact form
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent! I’ll get back to you shortly.');
  this.reset();
});

document.querySelectorAll('#fullscreen-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.style.display = 'flex';
        fullscreenMenu.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
});
