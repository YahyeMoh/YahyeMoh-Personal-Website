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

const toggle = document.querySelector('#darkmode-toggle');
let darkMode = localStorage.getItem("darkMode");
const firstLightLogo = document.querySelectorAll('img.light')[0];
const firstDarkLogo = document.querySelectorAll('img.dark')[0];

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
    firstLightLogo.classList.toggle('disappear');
    firstDarkLogo.classList.toggle('disappear');
  }
  
  const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
    firstLightLogo.classList.toggle('disappear');
    firstDarkLogo.classList.toggle('disappear');
  }
  
  toggle.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });