import React, { useContext } from "react";
import ToDos from "../../components/ToDos/ToDos";

import { appContext } from "../../context/AppContext";

const ToDosPage = () => {
  // const ToDosArray: { id: string; title: string; description: string }[] = [
  //   { id: "one", title: "Add New Sections!", description: "description One" },
  //   {
  //     id: "two",
  //     title: "take your breakfast!",
  //     description: "description Two",
  //   },
  // ];

  const appCtx = useContext(appContext);
  const ToDosArray = appCtx.toDos;

  return (
    <div>
      <ToDos todos={ToDosArray} />
    </div>
  );
};

export default ToDosPage;
