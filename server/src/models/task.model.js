const mongoose= require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    status: {
        type: String,
        required: false,
        enum: ['pending', 'in progress', 'completed' ]
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: 'true'
    }
});
module.exports = mongoose.model('Task', taskSchema);