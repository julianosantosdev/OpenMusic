let body = document.querySelector('body')
let darkModeButton = document.getElementById("themeButton");

darkModeButton.addEventListener("click", darkMode)

let themeDark

function darkMode (event) {
    body.classList.toggle('darkMode')
    themeDark = !themeDark
    localStorage.setItem('theme', themeDark)
    buttonChanger(darkModeButton) 
}

function buttonChanger (button) {
    if (themeDark) {
        button.classList.add('toLightModeButton')
        darkModeButton.classList.remove('toDarkModeButton')

    } else if (!themeDark){
        button.classList.add('toDarkModeButton')
        darkModeButton.classList.remove('toLightModeButton')
    }
}

function loadTheme() {
    themeDark = JSON.parse(localStorage.getItem('theme'))

    if (themeDark === true) {
        body.classList.add('darkMode')
        buttonChanger(darkModeButton)
        
    } else {
        buttonChanger(darkModeButton)
    }
}
loadTheme()

