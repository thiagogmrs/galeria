const img = document.querySelectorAll('img')
const bg = document.querySelector('body')
const titulo = document.querySelector('h1')
const items = document.querySelectorAll('.item')
const galeria = document.getElementById('galeria')

img[0].addEventListener('click', mudarBackgroundWolf)
img[1].addEventListener('click', mudarBackgroundDog)
img[2].addEventListener('click', mudarBackgroundCat)

function mudarBackgroundWolf (){
    bg.style.background = "#3b758f"
    titulo.style.color = "#3b758f"
    titulo.innerText = "Lobo"
}
function mudarBackgroundDog (){
    bg.style.background = "#6c9561"
    titulo.style.color = "#6c9561"
    titulo.innerText = "Cachorro"
}
function mudarBackgroundCat (){
    bg.style.background = "#9e939b"
    titulo.style.color = "#9e939b"
    titulo.innerText = "Gato"
}

items.forEach(eventosItems);

function eventosItems (item){
  item.addEventListener('click', mudarItem)
}
function mudarItem (event){
    const div = event.currentTarget;
    galeria.prepend(div);
}








