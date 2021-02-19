export default function initMenuDropDown(){
    const menuHamburg = document.querySelector('[data-menu-dropdown="hamburg"]')
    const menuContainer = document.querySelector('[data-menu-dropdown="menu"]')
    const sairMenu = menuContainer.querySelector('.sair')
    
   if(menuHamburg && menuContainer && sairMenu){
        function toggleMenu(){
            menuContainer.classList.toggle('ativo')
        }
        
        menuHamburg.addEventListener('click', toggleMenu)
        sairMenu.addEventListener('click', toggleMenu)
   }
}

