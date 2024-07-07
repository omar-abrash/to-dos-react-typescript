import React from "react";

import ToDoItem from "../ToDoItem/ToDoItem";

import styles from "./ToDos.module.css";

const ToDos: React.FC<{
  todos: { id: string; title: string; description: string }[];
}> = (props) => {
  return (
    <div className={styles.main}>
      <h1>To Dos!</h1>
      <ul>
        {props.todos.map((element) => (
          <ToDoItem key={element.id} item={element} />
        ))}
      </ul>
    </div>
  );
};

export default ToDos;
