const mongoose = require("mongoose");

const users = mongoose.Schema({
    firstName: { type: String, required: true, },
    lastName: { type: String. required: true},
    stageName: { type: String},
    email: { type: String, required: true },
    phone: { type: Number},
    address: { type: String},
    city: { type: String},
    state: { type: String },
    zip: { type: Number },
    package: { type: String},
    dateAdded: { type: Date, default: new Date() },
})


module.exports = mongoose.model(`users`, users);