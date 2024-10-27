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


app.get('/api/get-notes', (req, res) => {
    res.json(Note.find())
})

app.get('/api/get-note/:id', (req, res) => {
    id = req.params.id
    note = Note.findById(id)
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

app.listen(port, () => {
  console.log(`Started Express at localhost:${port}`)
})
