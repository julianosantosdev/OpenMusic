function createGenreButtons(genreList) {
    genreList.forEach((genre) => {
        let button = document.createElement('button')
        button.classList.add('standardButton', 'genreButton');
        button.innerText = genre
        addEventToButtons(button)
        let divButtons = document.querySelector('.buttonCollection')
        divButtons.append(button)
    })   
}
createGenreButtons(categories)

function addEventToButtons(buttons) {  
    buttons.addEventListener('click', event => {
        const genreIndex = categories.indexOf(`${event.target.innerText}`)
        if (genreIndex === 0){
            ul.innerHTML = ''
            cardCreation(products)
            sliderEvent(products)
        } else {
            const filtered = products.filter((albums) => albums.category === genreIndex)
            ul.innerHTML = ''
            cardCreation(filtered)
            sliderEvent(filtered) 
        }
    })
}