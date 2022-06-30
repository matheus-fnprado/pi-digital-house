// VALIDAÇÃO NEWSLETTER
// NÃO ESTÁ FUNCIONANDO BEM AINDA!
function validaNews() {
const form = document.getElementById ("newsletter-form");

function cleanForm (event) {
    const target = event.target;
    target.classList.remove("invalido");
    target.nextElementSibling.innerText = "";
}
function handleChange (event) {
    const target = event.target;
    if(!target.checkValidity()) {
        console.log(target.checkValidity())
        target.classList.add("invalido");
        form.name.setCustomValidity("Digite seu nome!");
        form.email.setCustomValidity("Digite seu e-mail corretamente!");
        target.nextElementSibling.innerText = target.validationMessage;
    } else {
        console.log("Ok")
        console.log(target.checkValidity())
        target.classList.remove("invalido");
        target.nextElementSibling.innerText = "";
    }
}

form.addEventListener("change", handleChange);
form.addEventListener("keyup", cleanForm);
}
validaNews()

