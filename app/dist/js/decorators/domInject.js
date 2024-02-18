export function domInject(selector) {
    return function (target, properKey) {
        let el;
        const getter = function () {
            if (!el) {
                el = document.querySelector(selector);
                console.log(`ja ta no cache`);
            }
            const elemento = document.querySelector(selector);
            return elemento;
            console.log(`Busca p elemento no DOM com o seletor ${selector} para injetar`);
        };
        Object.defineProperty(target, properKey, {
            get: getter
        });
    };
}
