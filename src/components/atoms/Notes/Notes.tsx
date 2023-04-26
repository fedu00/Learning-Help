import Note from "../Note/Note";
import "./NotesStyles.css";
import { NotElement } from "../../../types/noteTypes";

interface NotesProps {
  notes: NotElement[];
  deleteNote: (param: string | number) => void;
  editNote: (param: string | number) => void;
}

const Notes = ({ notes, deleteNote, editNote }: NotesProps) => {
  return (
    <div className="notes-container">
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
          editNote={editNote}
        />
      ))}
    </div>
  );
};

export default Notes;
