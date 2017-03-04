# Router

Un objeto _router_ es una instancia aislada de middleware y rutas. También se puede referir a ella como "mini-aplicación", capaz de realizar middelware y funciones de _router_. Cada aplicación _Express_ tiene un _router_ de aplicaciones incorporado.

Un _router_ se comporta como el propio middleware, por lo que puede utilizarlo como argumento para _app.use \(\)_ o como argumento para el método _use\(\)_ de otro _router_.

El objeto expreso de nivel superior tiene un método _Router\(\)_ que crea un nuevo objeto de _router_.



