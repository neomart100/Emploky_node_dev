//requerimos el modulo passport.js
const passport = require(`passport`);
//requeirmos passport-local con la propiedad especifica "strategy"
const localStrategy = require(`passport-local`).Strategy;
//requerimos el modelo de la base de datos user
const User = require(`../models/user`);


//-------MIDLERWARE--------
//nuevo localStrategy
passport.use(new localStrategy({
  //parametro de que dato voy  a recibir
    usernameField:`email`,
    passwordField:`password`

},async (email,password,done) => {
  //--consultar base de datos--
  //comparar email
  const modelUser = await User.findOne({email})

  if(!modelUser){
    return done(null,false,{message:`user not found`})
  }

  //--SI EL USUARIO EXISTE
  else{
    //comaparar contaseñas junto con el modelo y el midleware
 const macht = await  modelUser.machtPassword(password);
    if(macht){
      //-si el usuario existe me lo devuelve
        return done(null,modelUser)
    }else{
      //-si no me da un message de error
      return done(null,false,{message:`wrong password`})
    }
  }  
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
          done(err, user);
        });
});
