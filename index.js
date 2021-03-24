const bodyParser = require( 'body-parser' );
const morgan = require('morgan')
const express = require('express');
const app = express();
const pokemon = require('./routes/pokemon');

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
GET- Obtener recursos
POST- Almacenar/Crear Recursos
PATCH- Modificar una parte de un recurso
PUT - Modificar un recurso
DELETE - Borrar un recurso
*/ 

app.get("/", (req, res, next) => {
   return res.status(200).send("Bievenido al Pokedex");
});

app.use("/pokemon", pokemon);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
});