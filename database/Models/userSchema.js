const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    ID:{type:String}
});

module.exports = mongoose.model('users', userSchema);