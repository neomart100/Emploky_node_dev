const {Router} = require(`express`);

const router = Router();

//autenticacion de ususarios por medio de helpers
const {isAuthenticated} = require(`../helpers/validate`);

//importar desde emploky controllers
const {
renderEmplokyForm, createEmplokyLink, renderLinks, renderEditForm, updateLinks, deleteLinks
} = require(`../controllers/emploky_controler`);

//ruta de leer link
router.get(`/link/add`,isAuthenticated, renderEmplokyForm);

//ruta para crear link
router.post(`/link/new_link`,isAuthenticated,createEmplokyLink);

//ruta que lista todos los links
router.get(`/link`,isAuthenticated,renderLinks);

//ruta para editar los links
router.get(`/link/edit/:id`,isAuthenticated,renderEditForm);

//actualizar nota metodo put
router.put(`/link/edit/:id`,isAuthenticated,updateLinks);

//elimiar 
router.delete(`/link/delete/:id`,isAuthenticated,deleteLinks);

module.exports = router;



