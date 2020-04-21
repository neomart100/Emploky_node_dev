const mongoose = require("mongoose");
//dirccion de la base de datos 
   //cadena de connecion desde la variable de entorno
//Process.env como un objeto y se concatena con las variables
const {EMPLOKY_MONGODB_HOST,EMPLOKY_MONGODB_DATA} = process.env;
//almacenamos dentro de una constante
const MONGODB_URI = `mongodb://${EMPLOKY_MONGODB_HOST}/${EMPLOKY_MONGODB_DATA}`;


//establecer conexiones,direcciones y configuracion
mongoose.connect(MONGODB_URI,{
useUnifiedTopology: true ,
  useNewUrlParser: true,
  useCreateIndex: true
})

//cuando se conecten
.then(db => console.log(`the database is connected`))
//o cuando de errors
.catch(err => console.log(err));
