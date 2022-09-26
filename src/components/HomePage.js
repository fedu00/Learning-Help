import { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Notes from "./Notes";

const HomePage = () => {
  const [notes, setNotes] = useState([]);

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
      <Header onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
    </>
  );
};

export default HomePage;
