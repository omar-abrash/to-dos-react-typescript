import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ToDo from "../../model/ToDo";

import { appContext } from "../../context/AppContext";

import styles from "./AddToDoForm.module.css";

const AddToDoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const titleRef = useRef<HTMLInputElement>(null);
  const appCtx = useContext(appContext);

  const navigate = useNavigate();

  const titleHandling = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const descriptionHandling = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const newToDo = new ToDo(title, description);
    if (
      newToDo.title.trim().length > 0 &&
      newToDo.description.trim().length > 0
    ) {
      // add newToDo To main todos array in contextAPI:
      appCtx.addToDo(newToDo);
      //
      setTitle("");
      setDescription("");
      navigate("/");
    }
    return;
  };

  return (
    <div className={styles.main}>
      <div className={styles["form-title"]}>Add ToDo Form :</div>

      <form onSubmit={submitFormHandler}>
        <div className={styles["input-part"]}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={title}
            onChange={titleHandling}
            ref={titleRef}
          />
        </div>

        <div className={styles["input-part"]}>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            name="description"
            value={description}
            onChange={descriptionHandling}
          />
        </div>

        <div className={styles["submit-part"]}>
          <button type="submit">Add To Do</button>
        </div>
      </form>
    </div>
  );
};

export default AddToDoForm;
