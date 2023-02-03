const mongoose = require("mongoose");
const {Schema} = mongoose

const RoomSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    members : [
        {
            type: Schema.Types.ObjectId, 
            ref : 'user'
        }
    ]
})

module.exports = Room = mongoose.model('room', RoomSchema);