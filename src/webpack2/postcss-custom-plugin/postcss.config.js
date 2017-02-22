/* eslint-disable */ 

module.exports = {
  plugins: [
    require('./postcss-disable-property-value.js')(
      { 
      'border-radius':'50%', 
      'background-color':'red',
      'display':'flex',
      'content': "''", 
    }),  
  ]
}

/* eslint-enable */
