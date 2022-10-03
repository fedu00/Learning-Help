import { useState } from "react";
import "../styles/headerStyles.css";

const Header = ({ onAdd }) => {
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

  const submitButton = (event) => {
    onAdd(note);
    event.preventDefault();
    console.log(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <div className="headerContainer">
      <div className="formContainer">
        <h1 className="title">Stwórz notatkę</h1>
        <form>
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
          <div className="inputContainer">
            <textarea
              className="textAreaNote"
              placeholder="your note!"
              type="text"
              name="content"
              value={note.content}
              onChange={handleChange}
            />
          </div>
          <button className="add-button" onClick={submitButton}>
            add note
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
