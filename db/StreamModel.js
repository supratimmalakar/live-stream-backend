const mongoose = require('mongoose');

const StreamSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    stream: {
        streamType: String,
        sdp: String,
    }
})

const Stream = new mongoose.model('Stream', StreamSchema);

module.exports = Stream;