const mongoose = require('../db');

const MovieSchema = new mongoose.Schema({
    title: String,
    category: String,
    year: Number,
    duration: Number,
    director: String,
    rating: Number,
});

module.exports = mongoose.model('Movie', MovieSchema);