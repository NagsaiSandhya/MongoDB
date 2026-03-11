const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String,
    salary:Number
});

module.exports = mongoose.model("Student", StudentSchema); 