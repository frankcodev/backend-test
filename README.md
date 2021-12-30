# backend-test

# Disponible en el siguiente enlace

Deploy con heroku: [https://limitless-dusk-26873.herokuapp.com/](https://limitless-dusk-26873.herokuapp.com/).

## Endpoints Disponibles

En este proyecto puedes hacer uso de:

### `Registro`

##### `Metodo POST`\
https://limitless-dusk-26873.herokuapp.com/register

Ejmplo del body:\
{
     "email": "hola2@gmail.com",
     "password": "123456",
     "cpassword": "123456"
}

### `Login`

##### `Metodo POST`\
https://limitless-dusk-26873.herokuapp.com/login

Ejemplo del body:\
{
     "email": "hola2@gmail.com",
     "password": "123456",
}

###### `Los siguientes endpoints llevan el header "x-app-token" con el valor del token de autorización obtenido en el login`
"x-app-token": "valor del token"

### `Obtener parents`

##### `Metodo GET`\
https://limitless-dusk-26873.herokuapp.com/parents


### `Obtener childrens de un padre`

##### `Metodo GET`\
https://limitless-dusk-26873.herokuapp.com/children/:parentId

Ejemplo:\
https://limitless-dusk-26873.herokuapp.com/children/61cd0625e68f488b5755ed13


### `Crear padre`

##### `Metodo POST`\
https://limitless-dusk-26873.herokuapp.com/parents

Ejemplo del body:\
{
    "description": "Ropa para damas"
}

### `Crear children`

##### `Metodo POST`\
https://limitless-dusk-26873.herokuapp.com/children

Ejemplo del body:\
{
    "name": "Sandalias",
    "parentId": "61cd0625e68f488b5755ed13"
}


