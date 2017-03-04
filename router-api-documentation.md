# Router

---

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

# Métodos

---

### router.all\(path, \[callback, ...\] callback\) {#router.all}

Este método es igual que los métodos **router.METHOD\(\)**, excepto que coincide con todos los métodos HTTP \(verbos\).

Este método es extremadamente útil para mapear la lógica "global" para prefijos de ruta específicos o coincidencias arbitrarias. Por ejemplo, si coloco la ruta siguiente en la parte superior de todas las demás definiciones de ruta, se requeriría que todas las rutas a partir de ese punto requieran autentificación y cargarían automáticamente un usuario. Tenga en cuenta que estas devoluciones de llamada no tienen que actuar como puntos finales; **LoadUser** puede realizar una tarea y luego llamar a _next\(\)_ para seguir comparando las rutas subsiguientes.

```js
router.all('*', requireAuthentication, loadUser);
```

O el equivalente:

```js
router.all('*', requireAuthentication)
router.all('*', loadUser);
```

Otro ejemplo de esto es la funcionalidad "global" listada en blanco. Aquí el ejemplo es como antes, pero sólo restringe los caminos prefijados con _"/api"_:

```js
router.all('/api/*', requireAuthentication);
```

## router.METHOD \(ruta, \[callback, ...\] callback\)

Los métodos **router.METHOD\(\)** proporcionan la funcionalidad de enrutamiento en Express, donde METHOD es uno de los métodos HTTP, como GET, PUT, POST y así sucesivamente, en minúsculas. Por lo tanto, los métodos actuales son **router.get\(\)**, **router.post\(\)**, **router.put\(\)**, y así sucesivamente.

```
La función router.get() se llama automáticamente al método HEAD de HTTP además del método GET si
router.head() no fue llamado para la ruta antes de router.get().
```

Puede proporcionar múltiples _callback_, y todas se tratan de la misma forma, y se comportan como middleware, excepto que estas _callback _pueden invocar a continuación _\('ruta'\)_ para omitir la\(s\) llamada\(s\) de _route_ restantes. Puede utilizar este mecanismo para realizar las condiciones previas en una ruta y, a continuación, pasar el control a las rutas subsiguientes cuando no haya ninguna razón para proceder con la ruta coincidente.

El fragmento siguiente ilustra la definición de ruta más sencilla posible. Express traduce las cadenas de ruta a expresiones regulares, utilizadas internamente para coincidir con las solicitudes entrantes. Las cadenas de consulta no se consideran al realizar estas coincidencias, por ejemplo "GET /" coincidiría con la ruta siguiente, al igual que "GET /? Name = tobi".



