const path = require('path');

module.exports = {
    mode: 'development',
    //DevServer is used for the test that the library is working on the browser
    devServer: {
        contentBase: path.join(__dirname, 'client'),
        port: 3000,
        disableHostCheck: true,
    }
};
