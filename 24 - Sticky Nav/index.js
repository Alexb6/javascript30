const nav = document.querySelector('#main');
const navTopLimit = nav.offsetTop;

function stickyNav() {
    if(window.scrollY >= navTopLimit) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', stickyNav);