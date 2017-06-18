const path = require('path');
//path of output needs to be absolute!

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js' 
    }
};

module.exports = config;