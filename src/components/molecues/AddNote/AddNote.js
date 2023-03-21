import { useState, useEffect } from "react";
import "./AddNoteStyles.css";

const AddNote = ({ onAdd, editNoteItem, confirmEditNoteItem, editId }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    if (editNoteItem.length !== 0) {
      setNote(editNoteItem);
      setExpanded(true);
    }
  }, [editNoteItem]);

  const submitButton = (event) => {
    if (note.title !== "" || note.content !== "") {
      onAdd(note);
      event.preventDefault();
      setNote({
        title: "",
        content: "",
      });
      setExpanded(false);
    } else {
      alert("your note is empty, you can't add it!");
    }
  };

  const submitEditButton = (event) => {
    if (note.title !== "" || note.content !== "") {
      confirmEditNoteItem(note);
      event.preventDefault();
      setNote({
        title: "",
        content: "",
      });
      setExpanded(false);
    } else {
      alert("your note is empty, you can't confirm edit!");
    }
  };

  return (
    <div className="headerContainer">
      <div className="formContainer">
        <form>
          {isExpanded && (
            <div className="inputContainer">
              <input
                className="formInput"
                type="text"
                placeholder="title"
                name="title"
                value={note.title}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="inputContainer">
            <textarea
              className="textAreaNote"
              onClick={() => setExpanded(true)}
              placeholder="your note!"
              type="text"
              name="content"
              value={note.content}
              onChange={handleChange}
            />
          </div>
          {editId !== "" ? (
            <button className="add-button" onClick={submitEditButton}>
              EDIT NOTE
            </button>
          ) : (
            <button className="add-button" onClick={submitButton}>
              ADD NOTE
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddNote;
