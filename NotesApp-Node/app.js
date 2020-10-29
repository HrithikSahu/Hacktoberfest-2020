const notes=require("./notes.js")
const chalk=require ('chalk')
const yargs=require('yargs')
const { argv } = require("yargs")
const { removeNote, listNotes, addNote, readNote } = require("./notes.js")

//const command=process.argv[2]
//console.log(process.argv)
//customize yargs version
//yargs.version('1.1.0')

//add, remove, read, list

//Create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    handler(){
        // console.log('Title: '+argv.title)
        // console.log('Title: '+argv.body)
        notes.addNote(argv.title, argv.body)
    },
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    }

})

//create remove command
yargs.command({
    command:"remove",
    describe:"Remove a note",
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'

        },
        body:{
            describe:'Note Body',
            demandOption:false,
            type:'string'

        }
     
    },
    handler(){
        //console.log('Removing the note..')
        removeNote(argv.title, argv.body)

    }
})

//create read command
yargs.command({
    command:"read",
    describe:"Read a note",
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
      }  
    },
    handler(){
        //console.log('Reading the note..')
        readNote(argv.title)
    }
})

//create list command
yargs.command({
    command:"list",
    describe:"List a note",
    handler(){
        //console.log('Listing the note..')
        listNotes(argv.title)
    }
})

yargs.parse()
//console.log(yargs.argv)
/* if(command==='add'){
    console.log('Adding Note..')
}
else if (command==='remove'){
    console.log('Removing Note...')
} */

/* const validator=require('validator')
console.log(chalk.blue.inverse.bold(notes()))
console.log(validator.isEmail("sm@gmail.com"))
console.log(process.argv[2]) */



