const path = require('path');

module.exports = path.dirname(require.main.filename); // this will give the path of the main file which is app.js in this case. it is the root directory of the project.