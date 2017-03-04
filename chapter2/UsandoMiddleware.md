# Usando Middleware
Los **Middleware** son funciones que tienen acceso a:
- Objeto de **petición (req)**.
- Objeto de **respuesta (res)**.
- La función del siguiente middleware del ciclo petición-respuesta.

La función del siguiente **middleware** normalmente se denomina con la variable llamada **next**.

Los **middleware** pueden realizar las siguientes tareas: 
- **Ejecutar** cualquier código.
- **Realizar cambios** en los objetos petición y respuesta.
- **Finalizar el ciclo** de petición y respuesta.
- **Llamar al siguiente** función middleware de la pila.

Si la función middleware actual no es el final del ciclo petición-respuesta, esta debe **llamar a next()** para **pasar el control** a la siguiente función middleware. De otra forma, la petición se quedará colgada.

Una aplicación Express puede usar los siguientes tipos de middleware:
- Middleware a nivel de **aplicación**.
- Middleware a nivel de **router**.
- Middleware para el **manejo de errores**.
- Middleware **empotrado**.
- Middleware de terceros.

### Middleware a nivel de aplicación
Estos middleware se enlazan a una instancia del objeto de aplicación mediante las funciones `app.use()` y `app.metodo()` donde `metodo()` es un método HTTP (GET, POST, DELETE..), pero en minúscula.
En este ejemplo podemos observar una función middleware utilizando lo anteriormente mencionado:
```javascript
var app = express()

app.use(function (req, res, next) {
    console.log('Hora: 
}
```