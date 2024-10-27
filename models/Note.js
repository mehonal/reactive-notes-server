const mongoose = require('mongoose')
const db = require('../db.js')

const noteSchema = new mongoose.Schema({
    title: String,
    content: String
    // dateAdded: Date,
    // dateUpdated: Date,
})

noteSchema.methods.getExcerpt = function() {
    this.content.length > 500 ? `${this.content.slice(0,500)}...` : this.content.length
}

const Note = mongoose.model('Note', noteSchema)
module.exports = Note
