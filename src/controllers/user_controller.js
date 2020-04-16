const userCTRL = {};

//visto formulario d eregistro
userCTRL.renderSignupFomr = (req,res) =>{
  //renderizar el arhivo signup.hbs
  res.render(`users/singup`)
}

//datos recibidos desde el formulario de registro

userCTRL.singUp = (req,res ) =>{

  res.send(`usuario registrado`);

};

//formulario de entrada
userCTRL.RenderSingInForm = (re,res) =>{

  res.render(`users/singIn`);

} 
//datos recibidos desde el formulario de entrada
userCTRL.singIn = (req,res) =>{
    res.send(`usuario logueado`);
};

//Logout de usuarios
userCTRL.logout = (req,res) =>{
res.send(`has salido pa` fuera  de la aplicacion `);
}

module.exports = userCTRL;
