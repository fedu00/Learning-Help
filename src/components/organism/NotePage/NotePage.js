import { useState, useEffect } from "react";
import AddNote from "../../molecues/AddNote/AddNote";
import Notes from "../../atoms/Notes/Notes";

const NotePage = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevValue) => {
      return [...prevValue.filter((note, index) => index !== id)];
    });
  };
  return (
    <>
      <AddNote onAdd={addNote} />
      <Notes notes={notes} deleteNote={deleteNote} />
    </>
  );
};

export default NotePage;
