document.addEventListener('DOMContentLoaded', function () {
    var hamIcon = document.querySelector('.ham');
    var menu = document.querySelector('.menu');
    hamIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});