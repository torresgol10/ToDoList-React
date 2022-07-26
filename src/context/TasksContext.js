import React, { useState } from "react";

const Context = React.createContext({});

export function TasksContextProvider({ children }) {
  const [tasks, setTasks] = useState([])

  return (
    <Context.Provider value={{ tasks, setTasks }}>{children}</Context.Provider>
  );
}

export default Context;
