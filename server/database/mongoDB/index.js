var mongoose = require("mongoose");

module.exports = function(app){

  var opts = {
    server: {
      socketOptions: { keepAlive: 1 }
    }
  };

  switch(app.get('env')){
    case 'development':
    mongoose.connect('mongodb://127.0.0.1', opts);
    break;
    case 'production':
    // connect to mongoDB using connection string for production
    break;
    default:
    throw new Error('Unknown execution environment '+app.get('env'));
  }
}
