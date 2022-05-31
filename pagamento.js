function menu1() {
    const tipoPagamento = document.querySelectorAll("input[name='tipo']");  
    const cartaoClasses = document.querySelector(".pagamento-conteudo");
    const botaoMudar = document.querySelector(".botoesfinalizar");
    const textoMostrar1 = document.querySelector(".txtp1");
    const textoMostrar2 = document.querySelector(".txtp2");
    const textoMostrar3 = document.querySelector(".txtp3");
    const textoModificar= document.querySelector(".descontopix p");

    const findSelected = () => {
        const selected = document.querySelector("input[name='tipo']:checked").value;
        cartaoClasses.classList.remove("active") 
        textoMostrar1.classList.remove("active3")
        textoMostrar2.classList.remove("active3")
        textoMostrar3.classList.remove("active3")
            if (selected === "cartao") {
                cartaoClasses.classList.add("active");
                botaoMudar.children[1].innerHTML="Pagar com Cartão de Crédito"
                textoMostrar3.classList.add("active3");
                textoModificar.innerHTML="Pagamento via Cartão de Crédito"
            } else if (selected === "pix") {
                botaoMudar.children[1].innerHTML="Pagar com PIX"
                textoMostrar1.classList.add("active3");
                textoModificar.innerHTML="Pagamento via PIX"
            } else if (selected === "boleto") {
                botaoMudar.children[1].innerHTML="Pagar com Boleto"
                textoMostrar2.classList.add("active3");
                textoModificar.innerHTML="Pagamento via Boleto"
            }
    }
    tipoPagamento.forEach(radio => {radio.addEventListener("change", findSelected);
    })  
} 
menu1();

function menu2(){
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
menu2();