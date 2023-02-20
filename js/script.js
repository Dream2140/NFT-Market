const menuOpenBtn = document.querySelector('.header__btn');
const header = document.querySelector('.header');

(() => {
    menuOpenBtn.addEventListener('click', () => {
        header.classList.toggle('header--mobile-active')
    })

    AOS.init({
        duration: 1000
    });
})();


