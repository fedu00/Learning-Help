import { useState, useEffect } from "react";
import AddNote from "../../components/molecues/AddNote/AddNote";
import Notes from "../../components/atoms/Notes/Notes";
import { NotElement } from "../../types/noteTypes";

const NotePage = () => {
  const [notes, setNotes] = useState<NotElement[]>(
    localStorage.length > 0 ? JSON.parse(localStorage.notes) : []
  );
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
