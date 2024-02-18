import { NegociacaoDoDia } from "../interface/negociacao-do-dia";
import { Negociacao } from "../models/negociacao";

export class NegociacaoServe
{
    public obeterNegociacao() :Promise<Negociacao[]>
    {
        return fetch("http://localhost:8080/dados")
        .then(res => res.json())
        .then((dados: NegociacaoDoDia[]) => {
            return dados.map(dadoDeHoje => {
                return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante);
            });
        })
    }
}