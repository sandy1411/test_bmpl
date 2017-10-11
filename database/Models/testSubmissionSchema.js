const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const markedAnswersSchema = new Schema({
    testMarkedAnswer: { type: Number },
    testMarkedAnswerOn: { type: Date }

});
const testOptionsSchema = new Schema({
    testOptionKey: { type: Number },
    testOptionValue: { type: String },
    testOptionWeight: { type: Number }
});

const attemptedQuestionsSchema = new Schema({
    testQuestion: { type: String },
    testOptions: { type: testOptionsSchema },
    testCorrectOptions: [{ type: String }],
    testMarkedAnswers: { type: markedAnswersSchema }
});

const submissionDetailsSchema = new Schema({
    testId: { type: Schema.ObjectId, ref: "tests" },
    testName: { type: String },
    testTotalQuestions: { type: Number },
    testAttemptedQuestions: { type: attemptedQuestionsSchema },
    testCorrectAnswerCount: { type: Number },
    testWrongAnswerCount: { type: Number },
    testTotalTimeTaken: { type: Number },
    testTotalScore: { type: Number }
});

const testSubmissionSchema = new Schema({
    candidateId: { type: String },
    testSubmissionDetails: { type: submissionDetailsSchema },
    testSubmittedSuccess: { type: String },
    testTimeValidFor: { type: String },
    testStartOn: { type: Date },
    testCompletedOn: { type: Date },
    testActive: { type: String }

});

module.exports = mongoose.model('testSubmissions', testSubmissionSchema);