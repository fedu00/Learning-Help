import { useState, useEffect } from "react";
import AddNote from "../../components/molecues/AddNote/AddNote";
import Notes from "../../components/atoms/Notes/Notes";

const NotePage = () => {
  const [notes, setNotes] = useState(
    localStorage.length > 0 ? JSON.parse(localStorage.notes) : []
  );
  const [editNoteItem, setEditNoteItem] = useState([]);
  const [editId, setEditId] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes((prevValue) => {
      return [newNote, ...prevValue];
    });
  };

  const confirmEditNoteItem = (editNote) => {
    setEditId("");
    setNotes((prevValue) => {
      return [editNote, ...prevValue.filter((note, index) => index !== editId)];
    });
  };

  const editNote = (id) => {
    setEditNoteItem(notes.filter((note, index) => index === id)[0]);
    setEditId(id);
  };

  const deleteNote = (id) => {
    setNotes((prevValue) => {
      return [...prevValue.filter((note, index) => index !== id)];
    });
  };
  return (
    <div>
      <AddNote
        onAdd={addNote}
        editNoteItem={editNoteItem}
        confirmEditNoteItem={confirmEditNoteItem}
        editId={editId}
      />
      <Notes notes={notes} deleteNote={deleteNote} editNote={editNote} />
    </div>
  );
};

export default NotePage;
