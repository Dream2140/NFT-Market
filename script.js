const menuOpenBtn= document.querySelector('.header__btn');
const header = document.querySelector('.header');

(()=> {
    menuOpenBtn.addEventListener('click', (e)=>{
        header.classList.toggle('header--mobile-active')
    })
})();