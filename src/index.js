const dotenv =require(`dotenv`).config();

//importamos desde el archivo server.js
const app = require("./server");

require(`./database`);

//inicializamos el servidor con appp
app.listen(app.get(`port`), () =>{
 console.log(`server on port 3001`)
})
