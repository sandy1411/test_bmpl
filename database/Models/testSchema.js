const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const testOptionsSchema = new Schema({
testOptionKey :{type:Number},
testOptionValue : {type:String},
testOptionWeight : {type:Number}
});

const testQuestionsSchema = new Schema({

    testQuestionId :{type:String},
    testQuestion : {type:String},
testOptions: {type:testOptionsSchema},
testCorrectOptions :[{type:String}],
});

const testProfileSchema = new Schema({
testName :{type:String},
testDescription:{type:String},
testInstructions:[{type:String}],
testTotalQuestionsCount :{type: Number},
testDuration : {type:Number},
testMaximumScore : {type:Number},
testquestions :{type:testQuestionsSchema}
});

const testSchema = new Schema({
    testProfile : {type:testProfileSchema},
    teacherId : {type:String},
    testActive :{type:String},
    testCreatedOn : {type:Date},
    testUpdatedOn:{type:Date}

});

module.exports = mongoose.model('tests', testSchema);