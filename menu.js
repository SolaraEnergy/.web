document.querySelectorAll('.menu-toggle').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.toggle('active');
    });
});