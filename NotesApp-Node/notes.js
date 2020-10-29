const fs=require('fs')
const chalk = require('chalk')

const getNotes=function(){
    return "Your Notes..."
}
const removeNote=(title, body)=>{
    console.log('Removing Note with title: '+title)
    const notes=loadNotes()
    const nonDuplicateNotes=notes.filter((note)=> note.title!==title)
    const notesTobeRemoved=notes.filter((note)=>note.title===title)

    console.log('notesTobeRemoved')
    console.log(notesTobeRemoved)
     if(notesTobeRemoved.length==0){
         console.log(chalk.red.inverse('No Notes found'))
     }
     else{
         console.log(chalk.green.inverse('Removing Notes'))
     }
    console.log('nonDuplicateNotes')
    console.log(nonDuplicateNotes)
    if (nonDuplicateNotes.length===0){
        console.log('Only one note')
        fs.writeFileSync('Notes.json',"")
    }
    else{
        console.log('Remaining Notes..')
        saveNotes(nonDuplicateNotes)

    }

}

const listNotes=()=>{
    const notes=loadNotes()
    console.log(chalk.inverse("listing notes"))
    notes.forEach((note) => {
        console.log(note.title)
        
    });    
    
}

const readNote=(title)=>{

    debugger
    
    const notes=loadNotes()
    console.log(chalk.inverse("reading note with title "+title))
    notes.forEach((note) => {
        if (note.title==title){
            console.log(note.body)
        }
        else{
            console.log("no notes found")
        }
        
    });    
}

const addNote=(title, body)=>{
    // console.log('Title: '+title)
    // console.log('Body: '+body)
    const notes=loadNotes()
    const duplicateNotes=notes.filter((note)=> note.title=== title)
    const duplicateNote=notes.find((notes)=> note.title=== title)
    //if (duplicateNotes.length===0){
    if(!duplicateNote){
        console.log('Adding new note, no duplicate title found')
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
    }
    else{
        console.log('Note title taken, add a new title..')
    }
}

const saveNotes=(notes)=>{
    try{
        const notesJSON=JSON.stringify(notes)
        fs.writeFileSync('Notes.json',notesJSON)
    }
    catch(e){
        console.log('Exception in saveNotes: '+e)
    }

}

const loadNotes=()=>{
    try{
        const dataBuffer=fs.readFileSync('Notes.json')
        const dataJson=dataBuffer.toString()
        return JSON.parse(dataJson)
    }
    catch(e){
       // console.log('Exception: '+e)
        return []
    }
  
}
module.exports={
getNotes:getNotes,
addNote:addNote,
removeNote:removeNote,
listNotes:listNotes,
readNote:readNote
}