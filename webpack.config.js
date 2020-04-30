const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');

//configuracion webpack
module.exports = {
  //entrada
  entry:`./src/app/index.js`,
  //salida
  output:{
    filename: `bundle.js`,
    path: path.join(__dirname,`./src/public/js`),
      
  },

  module:{
    rules:[
      {
      //---TRADUCIR CODIGO----
      //leer todos los archivos js
      test:/\..js$/,
      //ignorar los archivos de node_modules
      exclude:/node_modules/,
      use:{
          loader: 'babel-loader'
      }

      },
    //--TRADUCIR ARCHIVOS .vue
      {
        test:/\.vue$/,
        loader:'vue-loader'
      }
        ]
  },
//----PLUGINS------
  plugins:[
  new VueLoaderPlugin()
  ]
};
