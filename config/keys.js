require("dotenv").config();

const user = process.env.MONGODB_USERNAME;
const pass = process.env.MONGODB_PASSWORD;

module.exports = {
  mongoURIDev: "mongodb://localhost:27017/form-builder-mern-stack",
  mongoURI: `mongodb+srv://${user}:${pass}@cluster0.ni4ot.mongodb.net/form-builder-mern-stack?retryWrites=true&w=majority`, //Cluster uri
};
