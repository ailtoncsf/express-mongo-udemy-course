const mongoose = require('mongoose')
//evitando warning quando o mongoose estiver deprecated
mongoose.Promise = global.Promise

/**************************************** 
Processo para startar o MongoDB

    sudo mkdir /data
    sudo mkdir /data/db
    sudo chown mongodb:ailton /data/db
    sudo chmod 775 -R /data/db
    mongod
    
*****************************************/
module.exports = mongoose.connect('mongodb://localhost/todo')