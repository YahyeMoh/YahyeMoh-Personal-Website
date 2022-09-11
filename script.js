const menu_icon = document.getElementById('menu');
const bar_one = document.getElementsByClassName('bar1');
const bar_two = document.getElementsByClassName('bar2');
const bar_three = document.getElementsByClassName('bar3');
const dropdown = document.querySelector('div.bot-nav');

function showMenu() {
    menu_icon.classList.toggle('change');
    dropdown.classList.toggle('dont-dropdown');
}

menu_icon.addEventListener('click', showMenu)