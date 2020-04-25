var redis = require('redis')
var express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

//instancia de bd Redis
var redis_cliente = redis.createClient(6379, 'redis')
var app = express()
app.use(bodyParser.json());
app.use(cors());

//Conexión a la BD
redis_cliente.on('connect', function(){
    console.log("conectado a redis")
})

/*app.get('/', function( req, res){
    redis_cliente.get("kylo", function(err, value){
        console.log({'valor': value})
        res.send(JSON.stringify({'valor': value}))
    })
})*/

//Eliminar datos en la BD
//redis_cliente.flushdb();

// CARGAR PERSONAJE
app.post('/cargar', function( req, res){
    redis_cliente.lpush(req.param("episodio"), [req.param("personaje")])
    res.send("Carga OK!")
})

// Listar EPISODIOS
app.get('/listar', function( req, res){
    redis_cliente.lrange(req.param("episodio"), 0, -1, function(err, values){
        res.send(JSON.stringify(values))
    })
})

// BAJA PERSONAJE
app.delete('/baja/:episodio/:personaje', function(req,res){
    redis_cliente.lrem(req.params.episodio,1,req.params.personaje)
    res.send("Eliminado Correctamente")
})

app.listen(3000, function(){
    console.log('Servidor corriendo en el puerto 3000');
})
