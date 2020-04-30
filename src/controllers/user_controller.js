const userCTRL = {};

const user = require(`../models/user`);
const passport = require(`passport`);

//visto formulario d eregistro
userCTRL.renderSignupForm = (req,res) =>{
  //renderizar el arhivo signup.hbs
  res.render(`users/singup`)
}

//datos recibidos desde el formulario de registro

userCTRL.signUp = async (req,res ) =>{

  //extraer datos desde el formulario
  //
  //arreglo donde estaran los errores
  const errors = [];

  const {name,email,password,confirm_password} = req.body;
  //si las contraseñas no coinciden
  if(password != confirm_password){
    errors.push({text:`password dont mach`});
  }
  //sin la contraseña es menor a 4 caracteres
  if(password.length < 4){
    errors.push({text:`password be  must 4 characters`})
  }

  //si tenemos algun error que lo reenvie a la vista
  if(errors.length > 0){
    res.render(`users/singup`,{
      errors,
      name,
      email
    })
  }

  //si no hay errores
  else{
//--Comparar usuarios con la base de datos--
    const emailUser = await user.findOne({email:email});
    //si si existe el email
    if (emailUser){
      req.flash(`error_msg`,`the email already exits`)
      res.redirect(`/user/signup`);
    }
  //si no esta registrado el usuario
    else{
      const newUser = new user({name,email,password});
      //encryptar contaseña antes de guardar
      newUser.password = await newUser.encryptPassword(password)
      await newUser.save();
      req.flash(`success_msg`,`you are register new can login`);
      res.redirect(`/user/signin`)
    }

  }

};
//--LOGIN-----
//formulario de entrada
userCTRL.renderSignInForm = (req,res) =>{

  res.render(`users/singIn`);

} 

//--PASSPORT-LOCAL INTEGRACION
//datos recibidos desde el formulario de entrada
userCTRL.signIn = passport.authenticate(`local`, {
      successRedirect: `/link`,
      failureRedirect: `/user/signin`,
      failureFlash: true
    });
//Logout de usuarios
userCTRL.logout = (req,res) =>{
  ///passport logout
req.logout();
  req.flash(`succes_msg`,`has salido pa fuera de la aplicacion`);
  res.redirect(`/user/signin`);  
}

module.exports = userCTRL;
