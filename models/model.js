const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema({ name: String, password: String })

module.exports = mongoose.model('Phones', phoneSchema)