function toggleMode() {
const html= document.documentElement

html.classList.toggle("light")


//pegar a img
const img = document.querySelector("#profile img")
// substituir a img
if (html.classList.contains("light")){
// se tiver light mode, adicionar a imagem light
img.setAttribute("src", "./acssec/avatar-light.png")
} else {

    img.setAttribute("src", "./acssec/avatar-dark.png")
}


//if(html.classList.contains('light')) {
//html.classList.remove('light')
//} else {
//    html.classList.add('light')}
}

 