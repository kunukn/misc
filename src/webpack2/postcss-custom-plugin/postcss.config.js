/* eslint-disable */ 

module.exports = {
  plugins: [
    //require('postcss-smart-import')({ /* ...options */ }),
    //require('precss')({ /* ...options */ }),
    //require('autoprefixer')({ /* ...options */ }),
    require('./postcss-disable-property-value.js')(
      { 
      'border-radius':'50%', 
      'background-color':'red',
      'display':'flex',
    }),  
  ]
}

/* eslint-enable */
