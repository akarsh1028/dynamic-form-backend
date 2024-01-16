const mongoose = require('mongoose')

const formSchema = mongoose.Schema(
    {
        body: {
            type: Object,
        },
    },
    {
        timestamps: true
    }
)

const DynamicForm = mongoose.model('Form', formSchema);

module.exports = DynamicForm;