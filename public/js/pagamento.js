function menuPagamento() {
    const tipoPagamento = document.querySelectorAll("input[name='tipo']");  
    const cartaoClasses = document.querySelector(".pagamento-conteudo");
    const botaoMudar = document.querySelector(".botoesfinalizar");
    const textoMostrar = document.querySelectorAll(".textopagamento");
    const textoModificar= document.querySelector(".descontopix p");

    const findSelected = () => {
        const selected = document.querySelector("input[name='tipo']:checked").value;
        cartaoClasses.classList.remove("active") 
        textoMostrar.forEach((item) => {
            item.classList.remove("active3")
        });
            if (selected === "cartao") {
                cartaoClasses.classList.add("active");
                botaoMudar.children[1].innerHTML="Pagar com Cartão de Crédito"
                textoMostrar[2].classList.add("active3");
                textoModificar.innerHTML="Pagamento via Cartão de Crédito"
            } else if (selected === "pix") {
                botaoMudar.children[1].innerHTML="Pagar com PIX"
                textoMostrar[0].classList.add("active3");
                textoModificar.innerHTML="Pagamento via PIX"
            } else if (selected === "boleto") {
                botaoMudar.style.display = 'none';
                botaoMudar.children[1].innerHTML="Pagar com Boleto"
                botaoMudar.style.display = 'flex';
                textoMostrar[1].classList.add("active3");
                textoModificar.innerHTML="Pagamento via Boleto"
            }
    }
    tipoPagamento.forEach(radio => {radio.addEventListener("change", findSelected);
    })  
} 
menuPagamento();

function subMenuCartao(){
    const tipoCartao = document.querySelectorAll("input[name='tipocartao']");
    const cartaoClasse1 = document.querySelector(".novocartao-conteudo");
    const cartaoClasse2 = document.querySelector(".cartaoexistente-conteudo");


    const findSelected = () => {
        const selected = document.querySelector("input[name='tipocartao']:checked").value;
        cartaoClasse1.classList.remove("active2");
        cartaoClasse2.classList.remove("active2"); 
        console.log(selected)
            if (selected === "cartaoexistente") {
                cartaoClasse1.classList.add("active2");
            } else if (selected === "novocartao") {
                cartaoClasse2.classList.add("active2");
    }
    }
    tipoCartao.forEach(radio => {radio.addEventListener("change", findSelected);
    })  
}
subMenuCartao();
