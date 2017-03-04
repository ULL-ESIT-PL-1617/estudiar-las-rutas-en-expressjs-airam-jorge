# Router

Un objeto _router_ es una instancia aislada de middleware y rutas. También se puede referir a ella como "mini-aplicación", capaz de realizar middelware y funciones de _router_. Cada aplicación _Express_ tiene un _router_ de aplicaciones incorporado.

Un _router_ se comporta como el propio middleware, por lo que puede utilizarlo como argumento para _app.use \(\)_ o como argumento para el método _use\(\)_ de otro _router_.

El objeto expreso de nivel superior tiene un método _Router\(\)_ que crea un nuevo objeto de _router_.

Una vez que haya creado un objeto _route_, puede agregar rutas intermedias y de método HTTP \(como obtener, publicar, publicar, etc.\) como una aplicación. Por ejemplo:

```js
// invoked for any requests passed to this router
router.use(function(req, res, next) {
  // .. some logic here .. like any other middleware
  next();
});

// will handle any request that ends in /events
// depends on where the router is "use()'d"
router.get('/events', function(req, res, next) {
  // ..
});
```

Se puede utilizar un _router_ para una URL raíz en particular, de esta manera separar sus rutas en archivos o incluso mini-aplicaciones.

```js
// only requests to /calendar/* will be sent to our "router"
app.use('/calendar', router);
```



