import "./noteStyles.css";

const Note = ({ title, content, onDelete, id }) => {
  return (
    <div className="noteContainer">
      <p className="title">{title}</p>
      <p className="note">{content}</p>
      <button className="button-delete" onClick={() => onDelete(id)}>
        delete
      </button>
    </div>
  );
};

export default Note;
