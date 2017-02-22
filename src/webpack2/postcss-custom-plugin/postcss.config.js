/* eslint-disable */ 

module.exports = {
  plugins: [
    //require('postcss-smart-import')({ /* ...options */ }),
    //require('precss')({ /* ...options */ }),
    //require('autoprefixer')({ /* ...options */ }),
    require('./postcss-disable-flex.js')({ /* ...options */ }),  
  ]
}

/* eslint-enable */
