const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

// MongoDB configuration
const db = require("./config/keys");

//Routes
const generateFormRoutes = require('./routes/generateFormRoutes');
const saveFormDataRoutes = require('./routes/saveFormDataRoutes');

// connect with database and check production mode or development mode
// if website is production mode then use online mongodb database otherwise user local database
mongoose
    .connect(
        process.env.NODE_ENV === "production" ? db.mongoURI : db.mongoURIDev
    )
    .then(() => console.log("Mongodb Connected"))
    .catch((err) => console.log(err));


//Use Routes
app.use("/api", generateFormRoutes);
app.use("/api", saveFormDataRoutes);

app.get("/api", (req, res) => {
    res.send("Server Running...");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});