const path = require('path');

module.exports = {
  entry: './src/index.js', // Punto de entrada
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Ruta de salida
    clean: true, // Limpia la carpeta de salida
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // O cualquier otro loader que estés usando
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Para manejar archivos CSS
      },
    ],
  },
};
