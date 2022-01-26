const GenerateForm = require("../models/GenerateForm");

//save form object function
exports.saveForm = async (req, res) => {
    try {

        const newForm = new GenerateForm({
            formName: req.body.data.formName,
            fields: req.body.data.fields
        })

        const form = await newForm.save();

        if (!form)
            return res.status(400).json({ error: "New Form Save failed" });

        res.status(201).json({
            form: form,
            message: "New from save successfully",
        });
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
}

//get a single form by id
exports.getForm = async (req, res) => {
    try {
        const id = req.params.id;
        const form = await GenerateForm.findById(id);
        res.json(form);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
}

// get all form
exports.getAllForm = async (req, res) => {
    try {
        const forms = await GenerateForm.find({});
        res.json(forms);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
}