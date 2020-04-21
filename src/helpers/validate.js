const helper ={};
//midleware personalizado
//--AUTORIZACION DE USUSARIOS RUTAS-----
helper.isAuthenticated =(req,res,next) =>{
  if(req.isAuthenticated()){
    return next();
  }
  req.flash(`error_msg`,`Not autorizado`)
 res.redirect(`/user/signin`);
}

module.exports = helper;
