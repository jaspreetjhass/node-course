const yargs=require('yargs')
const notes=require('./notes')

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'String'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'String'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'String'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'String'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Add a note',
    handler: function(){
        notes.listNotes()
    }
})

yargs.parse()