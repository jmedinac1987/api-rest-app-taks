# API REST 

Esta API fue construida con para brindar el servicio backend de las aplicaciones AppTasks y TasksMaterialApp, el API cuenta con las siguientes caracteristicas:

1. Manejo de usuarios
2. Manejo de documentos para bases de datos no relacionales.
3. Acceso a la aplicación mediante tokens (JWT)
4. Operaciones CRUD

## Tecnologías que componen el API

Las siguientes tecnologías fueron las que se consideraron para la construcción de la API:

    * Node.js
    * Mongoose
    * Express
    * CORS
    * Moment
    * Nodemailer
    * JWT
    * bcrypt
    * morgan
    * express-handlebars

## Como ejecutar el proyecto

1. Una vez clonado el proyecto en su equipo debe ingresar a la carpeta del proyecto y ejecutar el comando `npm install`.

2. Ingresar al archivo `package.json` y editar el script "start", este debe quedar de la siguiente forma: `"start": "nodemon src/index.js",` .

3. Ejecutar el comando `npm run start` e ingresar a su navegador web favorito e ingresar la siguiente url: `http://localhost:3000`.

## Demo

Pudes ver el demo del API en [tasksapplication.com](https://tasksapplication.herokuapp.com/login).

Nota: usar el usuario registrado previamente en la aplicación [AppTasks.com](https://jmedinac1987.github.io/apptasks/). o en la aplicación [TasksMaterialApp.com](https://jmedinac1987.github.io/tasksmaterialapp/).

## Licencia

Es un software de código abierto con licencia [MIT licencia](https://opensource.org/licenses/MIT).

