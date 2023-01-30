const mongoose = require('../db');

const CategoriesSchema = new mongoose.Schema({
    title: String,
});

module.exports = mongoose.model('Categories', CategoriesSchema);