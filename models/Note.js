const mongoose = require('mongoose')
const db = require('../db.js')

const noteSchema = new mongoose.Schema({
    id: Number,
    title: String,
    content: String
    // dateAdded: Date,
    // dateUpated: Date,
})

noteSchema.methods.getExcerpt = function() {
    this.content.legnth > 500 ? return `${this.content.slice(0,500)}...` : return this.content.length
}


