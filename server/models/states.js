const mongoose = require('mongoose');

const StatesScehma = new mongoose.Schema({
    happy : {
        type : Number,
        enum : [1,2,3,4],
        default : 1,
    },
    neutral : {
        type : Number,
        enum : [1,2,3,4],
        default : 1,
    },
    sad : {
        type : Number,
        enum : [1,2,3,4],
        default : 1,
    },
    angry : {
        type : Number,
        enum : [1,2,3,4],
        default : 1,
    },
    distrust : {
        type : Number,
        enum : [1,2,3,4],
        default : 1,
    },
    fearful : {
        type : Number,
        enum : [1,2,3,4],
        default : 1,
    },
    date : {
        type: String,
        default : Date.now,
    },
})

module.exports = State = mongoose.model('state', StatesScehma)
