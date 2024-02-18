export function inspect(){
    return function(
        target : any,
        propertyKey: string,
        descriptor : PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value
        descriptor.value = function(...args : any[]){
            const retorno = metodoOriginal.apply(this, args);
            console.log(`---Método ${propertyKey}`);
            console.log(`---Paramêntros ${JSON.stringify(args)}`);
            console.log(`---Retorno ${JSON.stringify(retorno)}`);
            return retorno;
        }

        return descriptor;
    }
}