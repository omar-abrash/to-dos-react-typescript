import React, { useContext } from "react";

import { appContext } from "../../context/AppContext";

const ToDoItem: React.FC<{
  item: { id: string; title: string; description: string };
}> = (props) => {
  const appCtx = useContext(appContext);

  const removeHandler = () => {
    appCtx.removeToDo(props.item.id);
  };

  return (
    <li>
      <div>
        <div>{props.item.title}</div>
        <div>{props.item.description}</div>
      </div>

      <div>
        <button type="button" onClick={removeHandler}>
          Remove
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
