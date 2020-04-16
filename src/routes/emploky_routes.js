const {Router} = require(`express`);

const router = Router();
//importar desde emploky controllers

const {
renderEmplokyForm, createEmplokyLink, renderLinks, renderEditForm, updateLinks, deleteLinks
} = require(`../controllers/emploky_controler`);

//ruta de leer link
router.get(`/link/add`, renderEmplokyForm);

//ruta para crear link
router.post(`/link/new_link`, createEmplokyLink);

//ruta que lista todos los links
router.get(`/link`, renderLinks);

//ruta para editar los links
router.get(`/link/edit/:id`,renderEditForm);

//actualizar nota metodo put
router.put(`/link/edit/:id`, updateLinks);

//elimiar 
router.delete(`/link/delete/:id`,deleteLinks);

module.exports = router;



