var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /.js$/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new BrowserSyncPlugin(
            // BrowserSync options 
            {
                // browse to http://localhost:3003/ during development,             
                host: 'localhost',
                port: 3003,
                server: { baseDir: ['./'] },
                ui: {
                    port: 3004
                },
                ghostMode: {
                    clicks: false,
                    forms: false,
                    scroll: false
                },
                files: ['*.html', '*.js', 'assets/**/*.*']
            },
            // plugin options 
            {                
                reload: true
            })
    ]
};
