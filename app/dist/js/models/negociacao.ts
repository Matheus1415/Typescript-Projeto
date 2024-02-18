export class Negociacao {

    constructor(
        public  readonly _data : Date, 
        public  readonly _quantidade : number, 
        public  readonly _valor : number,
    ){}

    get data() : Date
    {
        const date = new Date(this._data.getTime())
        return this._data;
    }

    get volume() : number
    {
        return this._quantidade * this._valor;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string) : Negociacao
    {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp,','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade ,valor);
    }
}