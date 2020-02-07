var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The todo text field is required']
  }
})

const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;