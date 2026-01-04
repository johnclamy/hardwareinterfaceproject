document.addEventListener('DOMContentLoaded', function () {
    const navlinks = document.querySelector('.navlinks');
    const hamburger = document.querySelector('.navlinks__hamburger');

    hamburger.addEventListener('click', function (e) {
        e.preventDefault();
        navlinks.classList.toggle('active');
    });
});