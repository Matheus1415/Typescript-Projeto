export abstract class View <T>{

    protected elemento: HTMLElement;
    private escapar = false

    constructor(selector: string, escapar?: boolean) {
        const elemento = document.querySelector(selector);
        if(elemento){
            this.elemento = elemento as HTMLAnchorElement
        }else{
            throw Error(`Sletor ${selector} não existe no Dom`);
        }
        
    }

    public update(model: T): void
    {
        let templete = this.templete(model);
        if(this.escapar){
            templete =  templete.replace(/<script>[\s\S]*?<\/script>/g, '');
        }
        this.elemento.innerHTML = templete;
    }

    protected abstract templete(model: T): string; 
}
