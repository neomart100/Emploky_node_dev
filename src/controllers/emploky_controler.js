const emplokyCTRL = {};
//---IMPORTAR BASE DE DATOS---
const  relinks = require(`../models/links`);


//----FORMULARIO DE ENVIO-----
emplokyCTRL.renderEmplokyForm = (req, res) => {
  res.render(`links/new_link`);
};


//crear POST
//---ENVIAR LINKS A ALMACENAR (SERVIDOR)----
emplokyCTRL.createEmplokyLink = async (req, res) => {
  //se guardan en una constante
  const{category,tittle,link}= req.body;
  ///nueva nota
  const newLink = new relinks ({category,tittle,link  });
  //guradar link 
  await newLink.save();
  req.flash(`success_msg`, `El link ha sido creado satisfactoriamente`);
  res.redirect(`/link`)

};




//crear GET

emplokyCTRL.renderLinks = async (req, res) => {
  //buscar las colecciones de mongodb 
  const findLinks = await relinks.find().lean();

  res.render(`../views/links/all_links`,{findLinks});
};


//actualizar
emplokyCTRL.renderEditForm = async (req, res) => {
  const editLinks = await relinks.findById(req.params.id).lean();
  //pasar la nota a la vista(view)
  res.render(`../views/links/edit_links`, {editLinks} );
};


//update
emplokyCTRL.updateLinks = async (req, res) =>{
  //traermer los valores
  const {tittle,link,category} = req.body;
  await relinks.findByIdAndUpdate(req.params.id,{tittle,link,category})
  req.flash(`success_msg`, `actualizado`);
  res.redirect(`/link`);
};



//delete
emplokyCTRL.deleteLinks = async  (req,res) =>{
  //encontrar y borrar nota
  await relinks.findByIdAndDelete(req.params.id);
  req.flash(`success_msg`,`El link ha sido eliminado`);
  res.redirect(`/link`)
}

module.exports = emplokyCTRL;
