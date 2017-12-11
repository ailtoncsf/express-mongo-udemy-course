const mongoose = require('mongoose')
//evitando warning quando o mongoose estiver deprecated
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')