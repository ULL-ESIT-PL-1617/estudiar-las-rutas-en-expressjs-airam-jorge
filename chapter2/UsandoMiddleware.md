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
var app = express();

app.use(function (req, res, next) {
  console.log('Hora:', Date.now());
  next();
});
```
En este caso, la función se ejecuta cada vez que se reciba una solicitud, sin importar de qué tipo. Obsérvese el uso de la función "next()" la cual invoca a la siguiente middleware en el caso de que no se finalice el ciclo de petición-respuesta.
```javascript
app.use('/user/:id', function (req, res, next) {
  console.log('Tipo de solicitud:', req.method);
  next();
});
```
Esta función se ejecuta cada vez que accedemos con el navegador al directorio "/user/:id", donde ":id" es un comodín el cual toma el valor que tenga en la URL. Por ejemplo, si la URL es:

http://localhost:8080/user/ejemplo entonces se accederá al directorio /user/ejemplo. Una vez completada la solicitud, el ejemplo imprimirá en consola el tipo de solicitud usado.
```javascript
app.get('/user/:id', function (req, res, next) {
  res.send('USER');
});
```
Esta función se ejecuta cuando el método de solicitud es un GET.

A continuación veremos la forma de concatenar llamadas a funciones dentro de una misma middleware:
```javascript
app.use('/user/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
     console.log('Request Type:', req.method);
     next();
});
```
