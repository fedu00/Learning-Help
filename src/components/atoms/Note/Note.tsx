import "./noteStyles.css";

interface NoteProps {
  title: String;
  content: String;
  onDelete: (param: string | number) => void;
  id: number;
  editNote: (param: string | number) => void;
}

const Note = ({ title, content, onDelete, id, editNote }: NoteProps) => {
  return (
    <div className="noteContainer">
      <p className="title">{title}</p>
      <p className="note">{content}</p>
      <div className="button-container">
        <button className="button-edit" onClick={() => editNote(id)}>
          edit
        </button>
        <button className="button-delete" onClick={() => onDelete(id)}>
          delete
        </button>
      </div>
    </div>
  );
};

export default Note;
