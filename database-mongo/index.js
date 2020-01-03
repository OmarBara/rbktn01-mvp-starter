var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myApp');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});
//************************item ****************************************/
var itemSchema = mongoose.Schema({
  quantity: Number,
  description: String
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};
//************************user ****************************************/
var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  }
});

var user = mongoose.model('user', userSchema);

var userCreate = function(callback) {
user.create(userData, function (err, user) {
  if (err) {
    return next(err)
  } else {
    return res.redirect('/profile');
  }
});
}

// var selectUser = function(callback) {
//   user.find({}, function(err, users) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, users);
//     }
//   });
// };


module.exports.userCreate = userCreate
module.exports.selectAll = selectAll;