export function inspect() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const retorno = metodoOriginal.apply(this, args);
            console.log(`---Método ${propertyKey}`);
            console.log(`---Paramêntros ${JSON.stringify(args)}`);
            console.log(`---Retorno ${JSON.stringify(retorno)}`);
            return retorno;
        };
        return descriptor;
    };
}
