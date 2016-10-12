var path = require('path');

/* Based on https://github.com/zyml/es6-karma-jasmine-webpack-boilerplate*/ 

module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'], // Chrome
        coverageReporter: {
            reporters: [
                { type: 'html', subdir: 'html' },
                { type: 'lcovonly', subdir: '.' },
            ],
        },
        files: [
            'tests.webpack.js',
        ],
        frameworks: [
            'jasmine',
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap'],
        },
        reporters: ['progress', 'coverage'],
        webpack: {
            cache: true,
            devtool: 'inline-source-map',
            module: {
                preLoaders: [{
                        test: /spec\.js$/,
                        include: /src/,
                        exclude: /node_modules/,
                        loader: 'babel',
                        query: {
                            cacheDirectory: true,
                        },
                    },
                    {
                        test: /\.js?$/,
                        include: /src/,
                        exclude: /(node_modules|__tests__)/,
                        loader: 'babel-istanbul',
                        query: {
                            cacheDirectory: true,
                        },
                    },
                ],
                loaders: [{
                        test: /\.js$/,
                        include: path.resolve(__dirname, '../src'),
                        exclude: /(node_modules|__tests__)/,
                        loader: 'babel',
                        query: {
                            cacheDirectory: true,
                        },
                    },
                    { test: /\.html/, exclude: /node_modules/, loader: 'raw' },
                    { test: /\.scss/, exclude: /node_modules/, loader: 'style!css!scss' },
                    { test: /\.css$/, exclude: /node_modules/, loader: 'style!css' }
                ],
            },

        },
    });
};


function getPath(relativePath) {
    return path.join(__dirname, relativePath);
}