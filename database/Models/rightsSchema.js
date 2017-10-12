const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rightsSchema = new Schema({

    rightName : {type:String},
    rightUrl : {type: String},
    rightDescription: {type:String},
    rightActive: {type:String},
    rightCreatedOn: {type:Date},
    rightUpdatedOn : {type:Date}


});

module.exports = mongoose.model('rights', rightsSchema);