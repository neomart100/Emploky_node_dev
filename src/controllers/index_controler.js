//objeto
const indexCTRL = {};

//la usamos en una funcion 

indexCTRL.render_index = (req, res) => {
	res.render(`index_template`)
};

indexCTRL.render_about = (req, res) => {
	res.render(`about`);
};

module.exports = indexCTRL;
