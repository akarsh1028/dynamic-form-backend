const mongoose = require('mongoose')

const formSchema = mongoose.Schema(
    {
        body: {
            type: Object,
            required: true
        },
    },
    {
        timestamps: true
    }
)

const DynamicForm = mongoose.model('Form', formSchema);

module.exports = DynamicForm;