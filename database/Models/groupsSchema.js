const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupsSchema = new Schema({

    groupName: { type: String },
    rightId: [
        {
            type: String
        }
    ],
    groupActive: { type: String },
    groupCreatedOn : {type:Date},
    groupUpdatedOn : {type:Date}


});

const groupModel = mongoose.model('groups', groupsSchema);

module.exports = groupModel;