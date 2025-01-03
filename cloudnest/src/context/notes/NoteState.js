// import NoteContext from "./noteContext";
// import { useState } from "react";

// const NoteState = (props) => {
//   const host = "http://localhost:5000"
//   const notesInitial = []
//   const [notes, setNotes] = useState(notesInitial)

//   // Get all Notes
//   const getNotes = async () => {
//     // API Call 
//     const response = await fetch(`${host}/api/notes/fetchallnotes`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token":localStorage.getItem('token')
//       }
//     });
//     const json = await response.json() 
//     setNotes(json)
//   }

//   // Add a Note
//   const addNote = async (title, description, tag) => {
//     // TODO: API Call
//     // API Call 
//     const response = await fetch(`${host}/api/notes/addnotes`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token":localStorage.getItem('token')
//       },
//       body: JSON.stringify({title, description, tag})
//     });

//     const note = await response.json();
//     setNotes(notes.concat(note))
//   }

//   // Delete a Note
//   const deleteNote = async (id) => {
//     // API Call
//     const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": localStorage.getItem('token')
//       }
//     });
//     const json = response.json(); 
//     console.log(json);
//     const newNotes = notes.filter((note) => { return note._id !== id })
//     setNotes(newNotes)
//   }

//   // Edit a Note
//   const editNote = async (id, title, description, tag) => {
//     // API Call 
//     const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": localStorage.getItem('token')
//       },
//       body: JSON.stringify({title, description, tag})
//     });
//     const json = await response.json(); 
//     console.log(json);

//      let newNotes = JSON.parse(JSON.stringify(notes))
//     // Logic to edit in client
//     for (let index = 0; index < newNotes.length; index++) {
//       const element = newNotes[index];
//       if (element._id === id) {
//         newNotes[index].title = title;
//         newNotes[index].description = description;
//         newNotes[index].tag = tag; 
//         break; 
//       }
//     }  
//     setNotes(newNotes);
//   }

//   return (
//     <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
//       {props.children}
//     </NoteContext.Provider>
//   )

// }
// export default NoteState;
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const [notes, setNotes] = useState([]);
  
  // Get all Notes
  const getNotes = async () => {
    
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      // Ensure response is an array
      setNotes(Array.isArray(json) ? json : []);
    } catch (error) {
      console.error("Error fetching notes:", error);
      setNotes([]); // Fallback to an empty array on error
    }
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addnotes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tag }),
      });

      const note = await response.json();
      console.log(note);
      // Safely update the notes array
      // setNotes((prevNotes) => (Array.isArray(prevNotes) ? prevNotes.concat(note) : [note]));
      setNotes((prevNotes) => [...prevNotes, note]); 
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // Delete a Note
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      console.log(json);

      setNotes((prevNotes) => (Array.isArray(prevNotes) ? prevNotes.filter((note) => note._id !== id) : []));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tag }),
      });

      const json = await response.json();
      console.log(json);

      setNotes((prevNotes) => {
        if (!Array.isArray(prevNotes)) return [];
        const updatedNotes = JSON.parse(JSON.stringify(prevNotes));
        for (let index = 0; index < updatedNotes.length; index++) {
          if (updatedNotes[index]._id === id) {
            updatedNotes[index].title = title;
            updatedNotes[index].description = description;
            updatedNotes[index].tag = tag;
            break;
          }
        }
        return updatedNotes;
      });
    } catch (error) {
      console.error("Error editing note:", error);
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
