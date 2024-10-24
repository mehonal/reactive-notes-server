const express = require('express')
const app = express()
const port = 3000

// temporary notes (to be replaced with database later)
notes = [
    {
        id: 1,
        title: 'Note #1',
        content: 'Note content for note one...'
    },
    {
        id: 2,
        title: 'Note #2',
        content: 'Note content for note two...'
    }
]

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
    res.send('Works!')
})


app.get('/api/get-notes', (req, res) => {
    res.json(notes)
})

app.get('/api/get-note/:id', (req, res) => {
    id = req.params.id
    note = notes.find(note => note.id == id)
    res.json(note)
})

app.listen(port, () => {
  console.log(`Started Express at localhost:${port}`)
})
