import "../styles/noteStyles.css";
// import logo from "../assets/icons/deteleIcon.svg";

const Note = ({ title, content, onDelete, id }) => {
  return (
    <div className="noteContainer">
      <p className="title">{title}</p>
      <p className="note">{content}</p>
      <button className="button-delete" onClick={() => onDelete(id)}>
        delete
      </button>
      {/* <img src={logo} className="logo" alt="logo" /> */}
    </div>
  );
};

export default Note;
