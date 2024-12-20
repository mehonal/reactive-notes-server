const express = require('express')
const app = express()
const port = 3000
const Note = require('./models/Note.js')

app.use(express.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
    res.send('Works!')
})


app.get('/api/get-notes', async (req, res) => {
    notes = await Note.find().exec()
    res.json(notes)
})

app.get('/api/get-note/:id', async (req, res) => {
    id = req.params.id
    note = await Note.findById(id).exec()
    res.json(note)
})

app.post('/api/add-note', (req, res) => {
    newNote = new Note({
        title: req.body.title,
        content: req.body.content
    })
    newNote.save()
    res.json(newNote)
})

app.post('/api/update-note/:id', async (req, res) => {
    id = req.params.id
    note = await Note.findById(id).exec()
    note.title = req.body.title
    note.content = req.body.content
    note.save()
    res.json(note)
})

app.listen(port, () => {
  console.log(`Started Express at localhost:${port}`)
})
