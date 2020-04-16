const {schema,model} = require(`mongoose`);
//importamos bcript
const bcript = require(`bcriptjs`);

const user_schema = new.schema({

name:{type:string,required:true},

 email:{type:string,required:true},

 password:{type:string,required:true}


},
{timestamps:true}
);

//metodos para cifrar las contraseña

user_schema.method.emcrypt_password = async password =>{
//general un salt(cifrado) asincrono
const salt = await bcript.genSalt(10);
//ahora general hash
return await bcript.hash(password,salt);
};

//comparar contraseñas de login y register

user_schema.method.macht_password = function(password){
return await bcript.compare(password, this.password);

}

module.exports = model(user,user_schiema);
