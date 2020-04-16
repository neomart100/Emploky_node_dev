const express = require(`express`);
//---------INICIALIZACIONES------------
const app = express();
//requerir motor de plantillas
const exphbs = require(`express-handlebars`);
//recibe el archivo path de node
const path = require(`path`);
//requerir metodo override para peticiones PUT/DELETE
const methodOverride = require(`method-override`);
//---MODULO MORGAN----
const morgan = require(`morgan`);
//---MODULO CONNECT FLASH
const flash = require(`connect-flash`);
//-MODULO EXPRESS-SESSION
const session = require(`express-session`);



//-----------CONFIG----------------
//configuracion de puerto
app.set(`port`, process.env.PORT || 3001);
//configuracion de la carpeta views

//dirname es para saber donde esta el direcctorio
app.set(`views`, path.join(__dirname, `/views`));

//configurar motor de plantillas 
app.engine(`.hbs`, exphbs({

	//palntilla por default
	defaultLayout: `main`,

	//direcctorio raiz de la capeta `views/layouts` y `views/partials` 
	layoutsDir: path.join(__dirname, `/views`, `layouts`),
	partialsDir: path.join(__dirname, `/views`, `partials`),
	//configurar la estension de los archivos
	extname: `.hbs`
}));
//usar plantilla anteriormente definid//usar plantilla anteriormente definida
app.set(`view engine`, `.hbs`);


//---------------MIDLERWARESfunciones)---------------
//usar morgan
app.use(morgan(`dev`));
//datos del servidor que recibira el servidor en formato json 
app.use(express.urlencoded({extended: false}));

app.use(methodOverride(`_method`));

app.use(session({
  //configuraciones de express session
  //guradar session en el servidor
  secret: `secret`,
  resave: true,
  saveUninitialized: true
}));

app.use(flash());

//-----------GLOBAL VARIABLES------------
//connet flash
app.use((req,res,next) =>{

res.locals.success_msg =  req.flash(`success_msg`);

  next();

});

//-----------------ROUTES----------------
app.use(require(`./routes/index_routes`));

//rutas de crear,elimiar y actualizar
app.use(require(`./routes/emploky_routes`));


//----------static files(carpeta "public")-------
//encontrar la carpeta public dentro de el proycto
app.use(express.static(path.join(__dirname, `/public`)));

//exportamos a "index.js"
module.exports = app;
