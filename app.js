

// action menu hamburger ouverture / fermeture avec le bouton 

const btnmenu = document.querySelector('.logo_menu');
const menu = document.querySelector('.liste_nav');

btnmenu.addEventListener('click',() => {

    menu.classList.toggle('active')
})


// actions sur les boutons pour fermer le menu hamburger

const allLinks = document.querySelectorAll('.item_nav');

allLinks.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('active')
    })
})