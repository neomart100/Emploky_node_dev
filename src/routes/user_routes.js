const {Router} = require(`express`);

const router = Router(); 

const {renderSignupForm,renderSignInForm,signUp,signIn,logout} = 
  require(`../controllers/user_controller`);
//renderizar signup form
router.get(`/user/signup`,renderSignupForm);
//enviar los datos a signup form
router.post(`/user/signup`,signUp);
//renderizar signin form
router.get(`/user/signin`,renderSignInForm);
//enviar los datos a signin form
router.post(`/user/signin`,signIn);
//por ultimo salir por la ruta logout
router.get(`/user/logout`,logout);



module.exports= router;
