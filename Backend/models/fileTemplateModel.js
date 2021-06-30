const mongoose = require('mongoose');

const fileTemplateSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        file_path: {
            type: String,
            required: true
        },
        file_mimetype: {
            type: String,
            required: true
        }

    },
    {
        timestamps: true
    }
);

const FileTemplate = mongoose.model('FileTemplate', fileTemplateSchema);

module.exports = FileTemplate;
