// GALERIA IMAGENS
function galeria() {
const galeria = document.querySelectorAll(".produto-imagens img");
const galeriaContainer = document.querySelector(".produto-imagens");

function trocarImagem(event) {
    const img = event.currentTarget;
    galeriaContainer.prepend(img)
}
function eventosGaleria(img) {
    img.addEventListener("click", trocarImagem);
}
galeria.forEach(eventosGaleria);
}
galeria();

// FUNÇÃO PROVISÓRIA QUE INCLUI A MUDANÇA DE CORES, ATÉ AJEITAR A ORIGINAL
function accordion1() {
const perguntas = document.querySelectorAll(".descricao-produtos dt");
const cor01 = document.querySelector(".descricao-produtos")
const aClass = "active"

function ativarPergunta(event) {
    this.classList.toggle(aClass)
    this.nextElementSibling.classList.toggle(aClass);
    cor01.classList.toggle(aClass);
}
  
    perguntas.forEach((item) => {
        item.addEventListener("click", ativarPergunta);
})
}
accordion1();

function accordion2() {
const perguntas = document.querySelectorAll(".info-tecnica-produto dt");
const cor01 = document.querySelector(".info-tecnica-produto")
const aClass = "active"

function ativarPergunta(event) {
    this.classList.toggle(aClass)
    this.nextElementSibling.classList.toggle(aClass);
    cor01.classList.toggle(aClass);
}
  
    perguntas.forEach((item) => {
        item.addEventListener("click", ativarPergunta);
})
}
accordion2();

function accordion3() {
const perguntas = document.querySelectorAll(".avaliacao-usuarios dt");
const cor01 = document.querySelector(".avaliacao-usuarios")
const aClass = "active"

function ativarPergunta(event) {
    this.classList.toggle(aClass)
    this.nextElementSibling.classList.toggle(aClass);
    cor01.classList.toggle(aClass);
}
  
    perguntas.forEach((item) => {
        item.addEventListener("click", ativarPergunta);
})
}
accordion3();

function accordion4() {
const perguntas = document.querySelectorAll(".perguntas-respostas dt");
const cor01 = document.querySelector(".perguntas-respostas")
const aClass = "active"

function ativarPergunta(event) {
    this.classList.toggle(aClass)
    this.nextElementSibling.classList.toggle(aClass);
    cor01.classList.toggle(aClass);
}
  
    perguntas.forEach((item) => {
        item.addEventListener("click", ativarPergunta);
})
}
accordion4();

// // ESCONDER LISTAS - ESSA É A FUNÇÃO ORIGINAL QUE SERVE PRA TODAS
// function accordion() {
// const perguntas = document.querySelectorAll("main dt");
// const aClass = "active"

// function ativarPergunta(event) {
//     this.classList.toggle(aClass)
//     this.nextElementSibling.classList.toggle(aClass);
// }
  
//     perguntas.forEach((item) => {
//         item.addEventListener("click", ativarPergunta);
// })
// }
// accordion();

