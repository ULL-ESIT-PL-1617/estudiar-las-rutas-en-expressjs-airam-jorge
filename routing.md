# Routing

Como ya hemos visto en el ejemplo `inicial.js`, Routing es la definición de las URIs y cómo debe responder la aplicación a las peticiones de los clientes.

### Métodos de routing

Aunque existen numerosos métodos *request* de HTTP, no el conjunto completo es soportado por express.

**Métodos HTTP soportados**: *get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search, connect*.

Sin embargo, existe además un método de express para el cual no existe equivalente en HTTP, que será aplicado para **todos los métodos** del módulo HTTP. Se puede ver un ejemplo en `metodoAll.js` que imprimirá por consola cada vez que accedamos a "`/`". La implementación del método es la siguiente.

app.all('/', function (req, res, next) {
    console.log('Method all used ...');
    next();
});

