let ul = document.querySelector('ul')

function cardCreation (database) {

    database.forEach(album => {

        let li = document.createElement('li');

        let div_albumImg = document.createElement('div')
        div_albumImg.classList.add('div__albumImg')
        let img = document.createElement('img')
        img.src = `${album.img}`

        let div_albumInfos = document.createElement('div')
        div_albumInfos.classList.add('div__albumInfos', 'flex', 'flex_column')

        let div_artistAndYear = document.createElement('div')
        div_artistAndYear.classList.add('div__albumSmallInfos', 'flex')

        let artist = document.createElement('p')
        artist.innerText = `${album.band}`
        
        let albumYear = document.createElement('p')
        albumYear.innerText = `${album.year}`

        let albumName = document.createElement('p')
        albumName.innerText = `${album.title}`
        albumName.classList.add('textStyle2')

        let div_priceAndBuyButton = document.createElement('div')
        div_priceAndBuyButton.classList.add('div__priceAndButton', 'flex', 'flex_sBetween', 'flex_aCenter')

        let price = document.createElement('p')
        price.classList.add('albumPrice')
        price.innerText = `R$ ${album.price},00`

        let buyButton = document.createElement('button')
        buyButton.classList.add('standardButton', 'buyButton');
        buyButton.innerText = 'Comprar'
        
        li.append(div_albumImg, div_albumInfos)
        div_albumImg.append(img)
        div_albumInfos.append(div_artistAndYear, albumName, div_priceAndBuyButton)

        div_artistAndYear.append(artist, albumYear)
        div_priceAndBuyButton.append(price, buyButton)

        ul.append(li)
    })
}
cardCreation (products)


function sliderEvent(albums) {
    let slider = document.querySelector('input')
    let sliderValue = document.getElementById('priceLimitFont')
    
    slider.addEventListener('click', event => {
        sliderValue.innerText = `Até R$ ${event.target.value},00`

        const priceFilter = albums.filter((album) => album.price <= parseInt(event.target.value))

        ul.innerHTML = ''
        cardCreation(priceFilter)
    })
}
sliderEvent(products)