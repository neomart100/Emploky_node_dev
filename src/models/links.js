//definir modelos de datos dentro de mongodb
const {schema,model} = require(`mongoose`);
const mongoose = require('mongoose');
//nuevo esquema donde se detalla la estructura de datos
const emploky_eschema = new mongoose.Schema({
//categoria de los links
category: {
     type: String,
     required: true
   },
//titulo para cada link
 tittle:{
     type:String,
      required:true
 },
//link
 link:{
     type:String,
     required:true
 }//final de los schemas

},
{
//saber cuando fue creado o actualizado un link
     timestamps:true
})

//modelo con el nombre y el schema ya exportados
module.exports = model('Links',emploky_eschema);





