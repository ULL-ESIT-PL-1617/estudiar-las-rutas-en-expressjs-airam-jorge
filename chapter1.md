# Routing básico

El Routing define como una aplicación responde a una petición que pretende acceder a un punto concreto, esto es una URI (Identificador de Recursos Uniformes) y un método específico HTTP. Siendo algunos ejemplos demétodos los siguientes.
- GET
- POST
- PUT
- DELETE

Cada ruta puede tener varias funciones responsables (handler) que son ejecutadas cuando la ruta coincide. La definición de la ruta sigue la siguiente estructura.

```javascript
app.Method(PATH, HANDLER)
```

Siendo:

 - **app**: Una instancia de express.
 - **METHOD**: Un método *request* de HTTP, en minúscula.
 - **PATH**: La dirección del recurso en el servidor.
 - **HANDLER**: Función ejecutada cuando la ruta es encontrada.
 
En la carpeta de ejemplos se encuentra el ejemplo `inicial.js`. Este crea un servidor simple con express y varias rutas con sus handlers.