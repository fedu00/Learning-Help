import { useState, useEffect } from "react";
import Header from "./Header";
import Notes from "./Notes";

const HomePage = () => {
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
      <Header onAdd={addNote} />
      <Notes notes={notes} deleteNote={deleteNote} />
    </>
  );
};

export default HomePage;
