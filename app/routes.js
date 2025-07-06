export default class Routes{
    constructor(routes) {
       this.routes = routes || [];
    }

    registerRoutes({path, controller}){
        this.routes.push({path, controller});
    }

    handleHash(hash){
        // le hash peut etre #promotions, #promotion-1, #unite-1-2
        // il faut récupérer le premier élément qui sera la méthode du contrôleur et ses éventuels paramètres

        const cleanedHash = hash.replace('#', '') || 'promotions';
        const parts = cleanedHash.split('-');
        
        const method = parts[0]; // Premier élément = méthode
        const params = parts.slice(1); // Reste = paramètres
        
        return {
            method,
            params
        };
    }

    run() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash;
            const { method, params } = this.handleHash(hash);

            const route = this.routes.find(r => r.path === method);
            if (route) {
                route.controller[method](...params);
            }
        });
    }
}