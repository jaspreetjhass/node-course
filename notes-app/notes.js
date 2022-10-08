const fs = require('fs')
const chalk = require('chalk')

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    if (!duplicateNote) {
        notes.push({ title: title, body: body })
        saveNote(notes)
    } else {
        console.log(chalk.magenta('Note with title : ', title, ' is already taken'))
    }
}

const readNote = function (title) {
    const notes = loadNotes()
    const note = notes.find(note => note.title === title)
    if (note) {
        console.log(chalk.green('Title: ', note.title, ' ', 'Body: ', note.body))
    } else {
        console.log(chalk.red('Note with title :', title, ' is not found'))
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    const uniqueNotes = notes.filter(note => note.title != title)
    saveNote(uniqueNotes)
}

const listNotes = function () {
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(chalk.green('Title: ', note.title, ' ', 'Body: ', note.body))
    });
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.txt')
        const dataStr = dataBuffer.toString()
        return JSON.parse(dataStr)
    }
    catch (e) {
        return []
    }

}

const saveNote = function (notes) {
    const dataStr = JSON.stringify(notes)
    fs.writeFileSync('notes.txt', dataStr)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes
}