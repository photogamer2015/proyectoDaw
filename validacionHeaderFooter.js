//Header
const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementsByClassName('menu');
const menuDesplegable = document.querySelector('.menuDesplegable');

Array.from(menu).forEach((li) => {
    const itemsLi = li.cloneNode(true);
    menuDesplegable.appendChild(itemsLi);    
});

btnMenu.addEventListener('click', ()=> {
    const isVisible = menuDesplegable.style.display === 'block';
    menuDesplegable.style.display = isVisible ? 'none' : 'block';
});

document.addEventListener('click', (event) => {
    if(!btnMenu.contains(event.target) && !menuDesplegable.contains(event.target)){
        menuDesplegable.style.display = 'none';
    }
});
