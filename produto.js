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
const indicador = document.querySelector(".indicador-acc1")
const aClass = "active"

function ativarPergunta(event) {
    this.classList.toggle(aClass)
    this.nextElementSibling.classList.toggle(aClass);
    cor01.classList.toggle(aClass);
    indicador.classList.toggle(aClass);    
}
  
    perguntas.forEach((item) => {
        item.addEventListener("click", ativarPergunta);
})
}
accordion1();

function accordion2() {
const perguntas = document.querySelectorAll(".info-tecnica-produto dt");
const cor01 = document.querySelector(".info-tecnica-produto");
const indicador = document.querySelector(".indicador-acc2");
const aClass = "active";

function ativarPergunta(event) {
    this.classList.toggle(aClass);
    this.nextElementSibling.classList.toggle(aClass);
    cor01.classList.toggle(aClass);
    indicador.classList.toggle(aClass);    
}
  
    perguntas.forEach((item) => {
        item.addEventListener("click", ativarPergunta);
})
}
accordion2();

function accordion3() {
const perguntas = document.querySelectorAll(".avaliacao-usuarios dt");
const cor01 = document.querySelector(".avaliacao-usuarios");
const indicador = document.querySelector(".indicador-acc3");
const aClass = "active";

function ativarPergunta(event) {
    this.classList.toggle(aClass)
    this.nextElementSibling.classList.toggle(aClass);
    cor01.classList.toggle(aClass);
    indicador.classList.toggle(aClass);    
}
  
    perguntas.forEach((item) => {
        item.addEventListener("click", ativarPergunta);
})
}
accordion3();

function accordion4() {
const perguntas = document.querySelectorAll(".perguntas-respostas dt");
const cor01 = document.querySelector(".perguntas-respostas");
const indicador = document.querySelector(".indicador-acc4");
const aClass = "active";

function ativarPergunta(event) {
    this.classList.toggle(aClass)
    this.nextElementSibling.classList.toggle(aClass);
    cor01.classList.toggle(aClass);
    indicador.classList.toggle(aClass);    
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

function modalPagamentos() {
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');
    
    if(botaoAbrir && botaoFechar && containerModal) {
      
      function toggleModal(event) {
        event.preventDefault();
        containerModal.classList.toggle('ativo');
      }
      function cliqueForaModal(event) {
        if(event.target === this) {
          toggleModal(event);
        }
      }
    
      botaoAbrir.addEventListener('click', toggleModal);
      botaoFechar.addEventListener('click', toggleModal);
      containerModal.addEventListener('click', cliqueForaModal);
}
}
modalPagamentos();

// MENU OPÇÕES PAGAMENTO;

function metodoPagamento() {
    const botoes = document.querySelectorAll(".botoes-modal button")
    const conteudo = document.querySelectorAll(".modal div[type='content']")

    function toggleAtivo(event) {
        botoes.forEach((item) => {
            item.classList.remove("ativo")
        });
        conteudo.forEach((item) => {
            item.classList.remove("ativo")
        });
        
        event.preventDefault()
        if(event.currentTarget.id == "cartao") {
            conteudo[0].classList.add("ativo");
            this.classList.add("ativo");
        } else if (event.currentTarget.id == "pix"){
            conteudo[1].classList.add("ativo");
            this.classList.add("ativo");
        } else if (event.currentTarget.id == "boleto"){
            conteudo[2].classList.add("ativo");
            this.classList.add("ativo");
        }
}
    botoes.forEach((item) => {
        item.addEventListener("click", toggleAtivo);
})
}
metodoPagamento()

// ITEMS SIMILARES
// NÃO ESTÁ COMPLETA, FUNCIONANDO SÓ O BÁSICO;
function similares() {
  const botoesTroca = document.querySelectorAll(".pi-similares-container button");
  const similaresItems = document.querySelectorAll(".pi-similares-items div");
  const similaresContainer = document.querySelector(".pi-similares-items");

  function trocarOrdem(event) {
    const item = similaresContainer.lastChild;
    similaresContainer.prepend(item);
  }

  function eventoBotao(img) {
    img.addEventListener("click", trocarOrdem);
}
botoesTroca.forEach(eventoBotao);

//   galeria.forEach(eventosGaleria);
}
similares();
