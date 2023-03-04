const hamburger = document.getElementById('hamburger-menu')
const menu = document.getElementById('menu')
const xmark = document.getElementById('xmark')

//  Menu Links
const menuLinks = document.getElementById('menu-links')
const carot = document.getElementById('carot-down')
const extraMenu = document.getElementById('extra-menu')
const carotUp = document.getElementById('caret-up')
const carotIcons = document.getElementById('carot-icons')
const connect = document.getElementById('connect')

hamburger.addEventListener('click', function () {
    if(menu.classList.contains('open')) {
        console.log('Open Hamburger');
        menu.classList.add('close')
        menu.classList.remove('open')
        xmark.classList.add('open')
        xmark.classList.remove('close')
        menuLinks.classList.remove('close')
        menuLinks.classList.add('open')

    } else {
        console.log('Close Hamburger');
        menu.classList.add('open')
        menu.classList.remove('close')
        xmark.classList.add('close')
        xmark.classList.remove('open')
        menuLinks.classList.add('close')
        menuLinks.classList.remove('open')
    }
})

connect.addEventListener('click', function () {
    if(extraMenu.classList.contains('close')){
        console.log('open extra menu');
        carotUp.classList.remove('close')
        carotUp.classList.add('open')
        carot.classList.add('close')
        carot.classList.remove('open')
        extraMenu.classList.add('open')
        extraMenu.classList.remove('close')
    } else{
        extraMenu.classList.add('close')
        extraMenu.classList.remove('open')
        console.log('close extra menu');
        carotUp.classList.add('close')
        carotUp.classList.remove('open')
        carot.classList.remove('close')
        carot.classList.add('open')
    }
})

console.log(menuLinks);