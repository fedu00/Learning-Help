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
              placeholder="zacny tytuł"
              name="title"
              value={note.title}
              onChange={handleChange}
            />
          </div>
          <div className="inputContainer">
            <textarea
              className="textAreaNote"
              // placeholder="no napisz coś!"
              type="text"
              name="content"
              value={note.content}
              onChange={handleChange}
            />
          </div>
          <button onClick={submitButton}>add</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
