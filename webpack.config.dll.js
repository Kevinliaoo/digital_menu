const path = require('path');
const webpack = require('webpack');

// Esto lo que hace es agrupar todas las dependencias en común que tengo en el proyecto, y 
// agruparlos en un sólo lugar para que al momento de hacer build no me consuma tanto tiempo

module.exports = {
    entry: {
        // Modulos que quiero agrupar
        modules: [  // Nombre del archivo
            'react', 
            'react-dom',
            'aos',
            'react-icons'
        ]
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // Todos las dependencias van a estar en modules.js (name)
        filename: 'js/[name].js',
        library: '[name]',
    },
    plugins: [
        // Plugin para exportar el dll
        new webpack.DllPlugin({
            name: '[name]',
            path: path.join(__dirname, '[name]-manifest.json')
        })
    ],
}