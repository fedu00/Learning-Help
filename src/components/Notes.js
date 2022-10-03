import Note from "./Note";
import "../styles/noteStyles.css";

const Notes = ({ notes, deleteNote }) => {
  return (
    <div className="notes-container">
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
};

export default Notes;
