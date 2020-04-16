const {Router} = require(`express`);
const router = Router();
//importar desde la carpeta controllers
const {render_index, render_about} =
	require(`../controllers/index_controler`)

router.get(`/`, render_index);


router.get(`/about`, render_about);

module.exports = router;
