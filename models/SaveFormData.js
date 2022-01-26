const mongoose = require("mongoose");

const SaveFormDataSchema = new mongoose.Schema(
    {
        formId: {
            type: String,
            required: true,
        },
        formName: {
            type: String,
            required: true,
        },
        data: {
            type: {},
            required: true
        }
    },
    {
        timestamps: true,
    }
)

const token = mongoose.model("SaveFormData", SaveFormDataSchema);
module.exports = token;