import { NegociacaoControllers } from "./controllers/negociacao-controllers.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const controlller = new NegociacaoControllers();
const form = document.querySelector(".form");
if(form){
    form.addEventListener("submit", e =>{
        e.preventDefault();
        controlller.adcionar();
    })
}else{
    throw Error("Não foi possivel inicializar a aplicação.")
}
