var botao = document.querySelector("button")
var estaDark = false

botao.addEventListener("click", ativarDark)


function ativarDark() {
    var body = document.querySelector("body")

    if(estaDark) {
        body.classList.remove("dark")
        botao.innerText = "Ativar Dark"
        estaDark = false
    } else {
        body.classList.add("dark")
        botao.innerText = "Remover Dark"
        estaDark = true
    }
}

var botaoIngresso = document.querySelector("button#ingresso")

botaoIngresso.addEventListener("click", comprarIngressos)

function comprarIngressos() {
    var h1 = document.querySelector("h1")
    h1.innerText = "O seu número na fila é " + Math.floor(Math.random() * 100)

    var img = document.querySelector("img")
    img.classList.remove("esconder")

}

