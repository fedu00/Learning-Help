import { useState, useEffect } from "react";
import "./AddNoteStyles.css";
import { NotElement } from "../../../types/noteTypes";
import Button from "../../atoms/Button/Button";

interface AddNoteProps {
  onAdd: (param: NotElement) => void;
  editNoteItem: NotElement;
  confirmEditNoteItem: (param: NotElement) => void;
  editId: number | String;
}

const AddNote = ({
  onAdd,
  editNoteItem,
  confirmEditNoteItem,
  editId,
}: AddNoteProps) => {
  const [note, setNote] = useState<NotElement>({
    title: "",
    content: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    }
  }, [editNoteItem]);

  const submitButton = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (note.title !== "" || note.content !== "") {
      onAdd(note);
      event.preventDefault();
      setNote({
        title: "",
        content: "",
      });
    } else {
      alert("your note is empty, you can't add it!");
    }
  };

  const submitEditButton = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (note.title !== "" || note.content !== "") {
      confirmEditNoteItem(note);
      event.preventDefault();
      setNote({
        title: "",
        content: "",
      });
    } else {
      alert("your note is empty, you can't confirm edit!");
    }
  };

  return (
    <div className="headerContainer">
      <div className="formContainer">
        <form className="inputContainer">
          <input
            className="formInput"
            type="text"
            placeholder="title"
            name="title"
            value={note.title}
            onChange={handleChange}
          />
          <textarea
            className="textAreaNote"
            onClick={() => setExpanded(true)}
            placeholder="your note!"
            type="text"
            name="content"
            value={note.content}
            onChange={handleChange}
          />
          {editId !== "" ? (
            <Button
              text="EDIT NOTE"
              backgroundColor="rgb(78, 194, 214)"
              onClickFunction={submitEditButton}
            />
          ) : (
            <Button
              backgroundColor="#3d70c2"
              text="ADD NOTE"
              onClickFunction={submitButton}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default AddNote;
