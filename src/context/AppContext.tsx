import React, { createContext, ReactNode, useState } from "react";

import ToDo from "../model/ToDo";

interface AppContextInterface {
  toDos: ToDo[];
  addToDo: (newToDo: ToDo) => void;
  removeToDo: (id: string) => void;
}

interface ProviderInterface {
  children: ReactNode;
}

export const appContext = createContext<AppContextInterface>({
  toDos: [],
  addToDo: () => {},
  removeToDo: () => {},
});

const AppContextProvider: React.FC<ProviderInterface> = (props) => {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const addToDo = (newToDo: ToDo) => {
    setToDos((prev) => [...prev, newToDo]);
  };
  const removeToDo = (id: string) => {
    setToDos((prev) => prev.filter((item) => item.id !== id));
  };

  const contextValues = {
    toDos,
    addToDo,
    removeToDo,
  };
  return (
    <appContext.Provider value={contextValues}>
      {props.children}
    </appContext.Provider>
  );
};

export default AppContextProvider;
