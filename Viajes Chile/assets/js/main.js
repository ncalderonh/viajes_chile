const navEL = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEL.classList.add('bg-body-tertiary');
    } else  if (window.scrollY < 56) {
        navEL.classList.remove('bg-body-tertiary');
    }
});

