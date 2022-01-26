const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
    {
        formName: {
            type: String,
            required: true,
        },
        fields: {
            type: [],
            required: true
        }
    },
    {
        timestamps: true,
    }
)

const token = mongoose.model("GenerateForm", formSchema);
module.exports = token;