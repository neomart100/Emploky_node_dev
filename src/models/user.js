const {schema,model} = require(`mongoose`);
//importamos bcript
const bcrypt = require(`bcryptjs`);
//importamos mongosee
const mongoose = require('mongoose');


const user_schema = new mongoose.Schema({

name:{type:String,required:true},

 email:{type:String,required:true,unique:true},

 password:{type:String,required:true}


},
{timestamps:true}
);

//metodos para cifrar las contraseña

user_schema.method(`encryptPassword`, async function(password){
//general un salt(cifrado) asincrono
const salt = await bcrypt.genSalt(10);
//ahora general hash
return await bcrypt.hash(password,salt);
});

//comparar contraseñas de login y register

user_schema.method(`machtPassword`, 
  async function(password){
return await bcrypt.compare(password, this.password);
});

module.exports = model(`User`,user_schema);
