import { DiaDaSemana } from "../enums/dia-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from '../models/negociacoes.js';
import { MessagemView } from "../views/messagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoControllers
{
    private inputData : HTMLInputElement ;
    private inputQuantidade : HTMLInputElement ;
    private inputValor : HTMLInputElement ; 
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoes', true);
    private messagemView = new MessagemView('#messagemView')
    private readonly DOMINGO = 0;
    private readonly SABADO = 6;

    constructor(){
        this.inputData = <HTMLInputElement>document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement;
        this.inputValor = document.querySelector("#valor") as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    public adcionar() : void
    {

        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )
       if(this.EdiaUtil(negociacao._data)){
        this.negociacoes.adicionar(negociacao)
        this.limparFormulario() 
        this.atualizaView();
       }else{
        this.limparFormulario() 
        this.messagemView.update("Apenas negociações em dias uteis são aceitos");
       }

    }

    private EdiaUtil(date : Date) : boolean
    {
        return date.getDay() > DiaDaSemana.DOMINGO && date.getDay() < DiaDaSemana.SABADO;
    }




    private limparFormulario () : void
    {
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
        this.inputData.focus();
    }

    private atualizaView() : void
    {
        this.negociacoesView.update(this.negociacoes);
        this.messagemView.update('Negociação adicionada com sucesso :)'); 
    }

}