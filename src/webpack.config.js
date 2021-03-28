const path = require('path');

module.exports = {
 output: {
  filename: 'app.js'
 },

 module: { 
     
loaders: [
  {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader'
    }
   ]
  },
  devtool: "source-map"
};
