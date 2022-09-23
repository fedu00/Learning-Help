import { useState } from "react";
import "../styles/headerStyles.css";

const Header = () => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

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
              name="name"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="inputContainer">
            <textarea
              className="textAreaNote"
              placeholder="no napisz coś!"
              type="text"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
            />
          </div>
          {/* <button className="formButton">dodaj notatke</button> */}
        </form>
      </div>
    </div>
  );
};

export default Header;
