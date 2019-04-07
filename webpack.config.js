//

const path = require('path');

//what this is going to do is connect to front end it is my input it will translate
module.exports = {
 entry: [
   //here is the path to access the react jsx
   './public/react/index.jsx'
 ],
 //what i am going to translate
 output: {
   filename: 'bundle.js',
   //the translation already done what are we going to do with it
   //send it there
   path: path.join(__dirname, 'public/src')
 },
 module: {
   rules: [
     {
       test: /\.jsx?$/,
       use: [
         //what will translate it
         'babel-loader'
       ],
       exclude: /node_modules|packages/,
     },
     {
       test: /\.css$/,
       //what are we going to use in order to work with css
       use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
     }
   ],
 },
 resolve: {
   extensions: ['.js', '.jsx']
 }
};
