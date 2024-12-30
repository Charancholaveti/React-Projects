import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) =>{
    const notesInitial =[
        {
          "_id": "676e34a014e4ddb6834b6968",
          "user": "676e2df7d92312ebdfc2ff58",
          "title": "My alarm",
          "description": "Please wake up early",
          "tag": "General",
          "date": "2024-12-27T05:01:20.999Z",
          "__v": 0
        },
        {
          "_id": "676e34be14e4ddb6834b696b",
          "user": "676e2df7d92312ebdfc2ff58",
          "title": "My alarm",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2024-12-27T05:01:50.327Z",
          "__v": 0
        } ,
        {
          "_id": "676e34ads014e4ddb6834b6968",
          "user": "676e2df7d92312ebdfc2ff58",
          "title": "My alarm",
          "description": "Please wake up early",
          "tag": "General",
          "date": "2024-12-27T05:01:20.999Z",
          "__v": 0
        },
        {
          "_id": "676e34be14egh4ddb6834b696b",
          "user": "676e2df7d92312ebdfc2ff58",
          "title": "My alarm",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2024-12-27T05:01:50.327Z",
          "__v": 0
        } ,
        {
          "_id": "676e34a01hu4e4ddb6834b6968",
          "user": "676e2df7d92312ebdfc2ff58",
          "title": "My alarm",
          "description": "Please wake up early",
          "tag": "General",
          "date": "2024-12-27T05:01:20.999Z",
          "__v": 0
        },
        {
          "_id": "676e34be14e4ftddb6834b696b",
          "user": "676e2df7d92312ebdfc2ff58",
          "title": "My alarm",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2024-12-27T05:01:50.327Z",
          "__v": 0
        } 
      ]
      const [notes,setNotes]=useState(notesInitial);
      console.log("Adding")
      const addNote =(title,description,tag)=>{
        const note={
          "_id": "676e34be14e4ftddbJKJKMB6834b696addedb",
          "user": "676e2df7d92312ebdfc2ff58",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2024-12-27T05:01:50.327Z",
          "__v": 0
        } 
        setNotes(notes.concat(note));
      }
      const deleteNote =(id)=>{
        const newNote=notes.filter((note)=>{return note._id !==id;})
        setNotes(newNote);
      }
      const updateNote =()=>{
        
      }
     return(
            <NoteContext.Provider value={{notes,addNote,deleteNote,updateNote}}>
                {props.children}
            </NoteContext.Provider>
     )
}

export default NoteState;