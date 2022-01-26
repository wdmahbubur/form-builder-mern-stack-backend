const SaveFormDataSchema = require("../models/SaveFormData");

// save user input data in database
exports.saveData = async (req, res) => {
    try {
        const newData = new SaveFormDataSchema({
            formId: req.body.data.formId,
            formName: req.body.data.formName,
            data: req.body.data.data
        })

        const data = await newData.save();

        if (!data)
            return res.status(400).json({ error: "Information Save failed" });

        res.status(201).json({
            data: data,
            message: "Information save successfully",
        });
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
}


exports.getAllDataByFormId = async (req, res) => {
    try {
        const query = req.query;
        const data = await SaveFormDataSchema.find(query);
        if (!data)
            return res.status(404).json({ error: "No Data Found" });
        res.json(data);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
}
