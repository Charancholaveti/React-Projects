import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) =>{
  const host="http://localhost:5000"
    const notesInitial =[]

      const [notes,setNotes]=useState(notesInitial);
      const getNotes =async ()=>{
        //API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method:'GET',
          headers: {
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc2ZTJkZjdkOTIzMTJlYmRmYzJmZjU4In0sImlhdCI6MTczNTI3Mzk4Nn0.1VWt7xFfnhlUAxcXw1fxf4LRiQZEra0UGj1f3evxk0Q"          
          },
        });
        const json = await response.json(); 
        console.log(json);
      }

      //Adding a note
      const addNote =async (title,description,tag)=>{
        //API call
        const response = await fetch(`${host}/api/notes/addnotes`, {
          method:'POST',
          headers: {
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc2ZTJkZjdkOTIzMTJlYmRmYzJmZjU4In0sIml.hdCI6MTczNTI3Mzk4Nn0.1VWt7xFfnhlUAxcXw1fxf4LRiQZEra0UGj1f3evxk0Q"          },
          body: JSON.stringify({title,description,tag})
        });
        const json = response.json(); 
        const note={
          "_id": "676e34be14e4ftddbJKJKMjbjkhB6834b696addedb",
          "user": "676e2df7d92312ebdfc2ff58",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2024-12-27T05:01:50.327Z",
          "__v": 0
        } 
        setNotes(notes.concat(note));
      }

      //Deleting a note
      const deleteNote =async(id)=>{
        const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
          method:'DELETE',
          headers: {
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc2ZTJkZjdkOTIzMTJlYmRmYzJmZjU4In0sImlhdCI6MTczNTI3Mzk4Nn0.1VWt7xFfnhlUAxcXw1fxf4LRiQZEra0UGj1f3evxk0Q"          
          },
        });
        const json = await response.json(); 
        console.log(json);
        const newNote=notes.filter((note)=>{return note._id !==id;})
        setNotes(newNote);
      }
      const updateNote =async (id,title,description,tag)=>{
          //API call
        const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
          method:"POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc2ZTJkZjdkOTIzMTJlYmRmYzJmZjU4In0sIml.hdCI6MTczNTI3Mzk4Nn0.1VWt7xFfnhlUAxcXw1fxf4LRiQZEra0UGj1f3evxk0Q"          },
          body: JSON.stringify({title,description,tag})
        });
        const json = response.json(); 
        for(let index=0;index<notes.length;index++){
          const element=notes[index];
          if(element._id === id){
            element.title=title;
            element.description=description;
            element.tag=tag;
          }
        }
        
      }
     return(
            <NoteContext.Provider value={{notes,addNote,deleteNote,updateNote,getNotes}}>
                {props.children}
            </NoteContext.Provider>
     )
}

export default NoteState;