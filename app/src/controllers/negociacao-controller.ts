import { domInject } from '../decorators/domInject.js';
import { LogarTempoExecucao } from '../decorators/logar-tempo-execucao.js';
import { inspect } from '../decorators/nspect.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { NegociacaoDoDia } from '../interface/negociacao-do-dia.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
// import { NegociacaoServe } from '../services/negociacao-service.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {
    @domInject('#data')
    private inputData: HTMLInputElement;
    @domInject('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInject('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    // private negociacaoServe = new NegociacaoServe();

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    // @inspect()
    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value, 
            this.inputQuantidade.value,
            this.inputValor.value
        );
     
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView
                .update('Apenas negociações em dias úteis são aceitas');
            return ;
        }

        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }
/*
    public importaDados(): void {
        this.negociacaoServe
        .obeterNegociacao()
        .then(negociacoesDeHoje => {
            for(let negociacao of negociacoesDeHoje){
                this.negociacoes.adiciona(negociacao);
            }
            this.negociacoesView.update(this.negociacoes)
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        });
    }
*/ 

    private ehDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO 
            && data.getDay() < DiasDaSemana.SABADO;
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
}
