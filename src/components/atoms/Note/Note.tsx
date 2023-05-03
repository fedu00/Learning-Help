import Button from "../Button/Button";
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
        <Button
          text="edit"
          backgroundColor="rgb(78, 194, 214)"
          onClickFunction={() => editNote(id)}
        />
        <Button
          text="delete"
          backgroundColor="rgb(211, 49, 49)"
          onClickFunction={() => onDelete(id)}
        />
      </div>
    </div>
  );
};

export default Note;
