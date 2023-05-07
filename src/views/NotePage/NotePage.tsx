import { useState, useEffect } from "react";
import AddNote from "../../components/molecues/AddNote/AddNote";
import { NotElement } from "../../types/noteTypes";
import Note from "../../components/atoms/Note/Note";
import "./NotePageStyles.css";

const NotePage = () => {
  const [notes, setNotes] = useState<NotElement[]>(
    localStorage.length > 0 ? JSON.parse(localStorage.notes) : []
  );
  console.log("1a notes", notes);
  console.log("2a localStorage", localStorage);

  const [editNoteItem, setEditNoteItem] = useState<NotElement>({
    title: "",
    content: "",
  });
  const [editId, setEditId] = useState<string | number>("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote: NotElement): void => {
    setNotes((prevValue) => {
      return [newNote, ...prevValue];
    });
  };

  const confirmEditNoteItem = (editNote: NotElement): void => {
    setEditId("");
    setNotes((prevValue) => {
      return [editNote, ...prevValue.filter((note, index) => index !== editId)];
    });
  };

  const editNote = (id: number | string): void => {
    setEditNoteItem(notes.filter((note, index) => index === id)[0]);
    setEditId(id);
  };

  const deleteNote = (id: number | string): void => {
    setNotes((prevValue) => {
      return [...prevValue.filter((note, index) => index !== id)];
    });
  };
  return (
    <div className="notes-page-container">
      <AddNote
        onAdd={addNote}
        editNoteItem={editNoteItem}
        confirmEditNoteItem={confirmEditNoteItem}
        editId={editId}
      />
      <div className="notes-container">
        {notes.map((note, index) => {
          console.log("3a deck", note);
          console.log("4a index", index);

          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
              editNote={editNote}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NotePage;
